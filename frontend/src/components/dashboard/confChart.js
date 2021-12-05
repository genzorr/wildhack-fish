import { Line } from 'react-chartjs-2';
import { Box, Card, CardContent, CardHeader, Divider, useTheme } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const ConfChart = (props) => {
  const theme = useTheme();

  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);

  const dataOptions = {
    datasets: [
      {
        label: 'Уверенность в результате',
        data: data,
        // data,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
      }
    ],
    // labels
  };

  useEffect(() => {
    axios.get("http://localhost:5000/datasets").then((response) => {
      const data = {};
      for (const value of response.data) {
        const valueDate = new Date(value.date);
         const date = `${valueDate.getFullYear()}/${valueDate.getMonth() + 1}/${valueDate.getDate()}`;
         const dateObj = new Date(date);

         if (!(date in data)) {
           data[date] = {
             timestamp: dateObj.getTime(),
             x: date,
             y: 0,
             datasets: []
           }
         }
         data[date].y += value.conf;
         data[date].datasets.push({name: value.name, value: value.conf});
      }

      setData(Object.values(data).sort((a,b) => a.timestamp - b.timestamp).map(e => {
        e.y = e.y / e.datasets.length;

        return e
      }));
    }).catch(err => {
      console.error(err);
    })
  }, []);


  const options = {
    id: 'conf',
    animation: true,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false, enabled: false },
    maintainAspectRatio: false,
    responsive: true,
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    },
    plugins: {
      tooltip: {
        callbacks: {
            label: function(context) {
                let label = context.dataset.label || '';
                label += ": " + context.parsed.y.toFixed(2);
                const addLabels = ["Datasets:"];

                if (context.raw.datasets) {
                  addLabels.push(...context.raw.datasets.map(e =>`${e.name}: ${e.value.toFixed(2)}`))
                }
                return [label, ...addLabels];
            }
        }
      }
    }
  };

  return (
    <Card {...props}>
      <CardHeader title="Статистика уверенности в распознавании"/>
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          <Line
            id={'conf'}
            data={dataOptions}
            options={options}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

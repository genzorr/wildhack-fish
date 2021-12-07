import os

path = '/Users/genzorr/developing/hackatons/data/load'
files = os.listdir(path)

out_path = path + 'loaded.txt'
with open(out_path, 'w') as out_file:
	for f in files:
		# f = f.split('_')[0]
		# out_file.write(f + '.JPG' + '\n')
		out_file.write(f + '\n')

	
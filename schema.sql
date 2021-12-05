CREATE TABLE IF NOT EXISTS datasets(
    name   varchar(255) primary key,
    path   varchar(255) NOT NULL,
    conf   real        DEFAULT '0' NOT NULL,
    count  integer     DEFAULT '0' NOT NULL,
    status varchar(50) DEFAULT 'loaded' NOT NULL,
    images integer     DEFAULT '0' NOT NULL,
    date   datetime     NOT NULL
);

CREATE TABLE IF NOT EXISTS images
(
    name      varchar(255),
    datasetId varchar(255) NOT NULL,
    conf      real        DEFAULT '0' NOT NULL,
    count     integer     DEFAULT '0' NOT NULL,
    status    varchar(50) DEFAULT 'loaded' NOT NULL,
    date      datetime     NOT NULL,
    FOREIGN KEY (datasetId) REFERENCES datasets (name) ON DELETE CASCADE ON UPDATE CASCADE,
    PRIMARY KEY (name, datasetId)
);
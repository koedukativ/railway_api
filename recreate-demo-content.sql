DROP TABLE IF EXISTS trains;
DROP TABLE IF EXISTS stations;

CREATE TABLE stations (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  city varchar(255) NOT NULL,
  country varchar(255) NOT NULL
);

CREATE TABLE trains (
  id SERIAL PRIMARY KEY,
  name varchar(255) NOT NULL,
  company varchar(255) NOT NULL,
  length int NOT NULL,
  maintenance bool NOT NULL,
  current_station int NOT NULL,

   CONSTRAINT fk_station
      FOREIGN KEY(current_station) 
	  REFERENCES stations (id)
);

INSERT INTO stations (name, city, country) VALUES ('St Pancras', 'London', 'United Kingdom');
INSERT INTO stations (name, city, country) VALUES ('Zürich Central Station', 'Zurich', 'Switzerland');
INSERT INTO stations (name, city, country) VALUES ('Leipzig Central Station', 'Leipzig', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Roma Termini', 'Rome', 'Italy');
INSERT INTO stations (name, city, country) VALUES ('München Central Station', 'Munich', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Hamburg Central Station', 'Hamburg', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Berlin Central Station', 'Berlin', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Milan Central Station', 'Milan', 'Italy');
INSERT INTO stations (name, city, country) VALUES ('Moscow Kazansky', 'Moscow', 'Russia');
INSERT INTO stations (name, city, country) VALUES ('Frankfurt Central Station', 'Frankfurt am Main', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Bern Railway Station', 'Bern', 'Switzerland');
INSERT INTO stations (name, city, country) VALUES ('Birmingham New Street', 'Birmingham', 'United Kingdom');
INSERT INTO stations (name, city, country) VALUES ('Hannover Central Station', 'Hannover', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Utrecht Central Station', 'Utrecht', 'Netherlands');
INSERT INTO stations (name, city, country) VALUES ('London Bridge', 'London', 'United Kingdom');
INSERT INTO stations (name, city, country) VALUES ('Gare de Lyon', 'Paris', 'France');
INSERT INTO stations (name, city, country) VALUES ('Nuremberg Central Station', 'Nuremberg', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Cologne Central Station', 'Cologne', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Naples Central Station', 'Naples', 'Italy');
INSERT INTO stations (name, city, country) VALUES ('London Victoria', 'London', 'United Kingdom');
INSERT INTO stations (name, city, country) VALUES ('Vienna Central Station', 'Vienna', 'Austria');
INSERT INTO stations (name, city, country) VALUES ('Rotterdam Central Station', 'Rotterdam', 'Netherlands');
INSERT INTO stations (name, city, country) VALUES ('Düsseldorf Central Station', 'Düsseldorf', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Amsterdam Central Station', 'Amsterdam', 'Netherlands');
INSERT INTO stations (name, city, country) VALUES ('London Liverpool Street', 'London', 'United Kingdom');
INSERT INTO stations (name, city, country) VALUES ('Gare du Nord', 'Paris', 'France');
INSERT INTO stations (name, city, country) VALUES ('Essen Central Station', 'Essen', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Bremen Central Station', 'Bremen', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Stuttgart Central Station', 'Stuttgart', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Paris Saint-Lazare', 'Paris', 'France');
INSERT INTO stations (name, city, country) VALUES ('Gare Montparnasse', 'Paris', 'France');
INSERT INTO stations (name, city, country) VALUES ('Moscow Kursky', 'Moscow', 'Russia');
INSERT INTO stations (name, city, country) VALUES ('London Euston', 'London', 'United Kingdom');
INSERT INTO stations (name, city, country) VALUES ('Barcelona Sants', 'Barcelona', 'Spain');
INSERT INTO stations (name, city, country) VALUES ('Madrid Atocha', 'Madrid', 'Spain');
INSERT INTO stations (name, city, country) VALUES ('London Waterloo', 'London', 'United Kingdom');
INSERT INTO stations (name, city, country) VALUES ('Berlin Zoologischer Garten', 'Berlin', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Firenze Santa Maria Novella', 'Florence', 'Italy');
INSERT INTO stations (name, city, country) VALUES ('Bologna Central Station', 'Bologna', 'Italy');
INSERT INTO stations (name, city, country) VALUES ('Roma Tiburtina', 'Rome', 'Italy');
INSERT INTO stations (name, city, country) VALUES ('Moscow Yaroslavsky', 'Moscow', 'Russia');
INSERT INTO stations (name, city, country) VALUES ('Helsinki Central Station', 'Helsinki', 'Finland');
INSERT INTO stations (name, city, country) VALUES ('Wien Mitte', 'Vienna', 'Austria');
INSERT INTO stations (name, city, country) VALUES ('Berlin Friedrichstraße', 'Berlin', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Dortmund Central Station', 'Dortmund', 'Germany');
INSERT INTO stations (name, city, country) VALUES ('Oslo Central Station', 'Oslo', 'Norway');
INSERT INTO stations (name, city, country) VALUES ('Torino Porta Nuova', 'Turin', 'Italy');
INSERT INTO stations (name, city, country) VALUES ('Châtelet–Les Halles', 'Paris', 'France');
INSERT INTO stations (name, city, country) VALUES ('Haussmann – Saint-Lazare', 'Paris', 'France');
INSERT INTO stations (name, city, country) VALUES ('Nørreport station', 'Copenhagen', 'Denmark');
INSERT INTO stations (name, city, country) VALUES ('Magenta', 'Paris', 'France');


INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Eurostar e300', 'British Railways', 387, false, 1);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Class 395 (Javelin)', 'British Railways', 121, false, 12);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Class 801 (Super Express)', 'British Railways', 130, true, 20);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('EC250 Giruno', 'ÖBB', 200, false, 21);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('RailJET', 'ÖBB', 205, false, 43);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('ICE-TD', 'DSB', 107, false, 50);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Sm6 Allegro', 'VR Group', 185, false, 42);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('TGV V150', 'SNCF', 200, true, 16);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('TGV POS', 'SNCF', 200, false, 26);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Thalys PBKA', 'SNCF', 200, false, 30);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Eurostar e300', 'SNCF', 121, false, 31);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('ICE-T', 'Deutsche Bahn AG', 133, false, 5);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('ICE-3', 'Deutsche Bahn AG', 200, false, 6);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('ICE-4', 'Deutsche Bahn AG', 346, true, 7);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('ICE-S', 'Deutsche Bahn AG', 200, false, 10);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('ETR 400', 'Trenitalia', 202, false, 4);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('EC250 Giruno', 'Trenitalia', 200, false, 19);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('ETR 700', 'Trenitalia', 201, false, 38);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('.italo AGV', 'NTV', 132, false, 39);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Eurostar e320', 'Nederlandse Spoorwegen', 390, false, 14);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('ETR 700', 'Nederlandse Spoorwegen', 201, false, 22);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('ICE-3', 'Nederlandse Spoorwegen', 200, false, 24);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Thalys PBKA', 'Nederlandse Spoorwegen', 200, false, 24);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Oaris Flytoget', 'Vy', 103, false, 46);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('BM 73 Krengetog', 'Vy', 108, false, 46);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Sm6 Allegro', 'Russian Railways', 185, false, 9);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('ICE-3', 'Deutsche Bahn AG', 200, true, 32);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Sapsan (Velaro RUS)', 'Russian Railways', 250, false, 41);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Avant Serie 114', 'Renfe Operadora', 187, false, 34);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Oaris', 'Flytoget ', 202, false, 35);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('Talgo AVRIL', 'Renfe Operadora', 200, false, 34);
INSERT INTO trains (name, company, length, maintenance, current_station) VALUES ('SBB RABe 501', 'SBB', 200, false, 2);



-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Počítač: localhost:3306
-- Vytvořeno: Ned 01. pro 2019, 13:38
-- Verze serveru: 10.1.41-MariaDB-0+deb9u1
-- Verze PHP: 7.3.10-1+0~20191008.45+debian9~1.gbp365209

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Databáze: `6ep_prouzav`
--

-- --------------------------------------------------------

--
-- Struktura tabulky `authors`
--

CREATE TABLE `authors` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Vypisuji data pro tabulku `authors`
--

INSERT INTO `authors` (`id`, `firstname`, `lastname`) VALUES
(1, 'Richard', 'Adams'),
(2, 'Ivo', 'Železný'),
(3, 'Šolom', 'Alejchem'),
(4, 'Jakub', 'Arbes'),
(5, 'Thomas', 'Andersen'),
(6, 'Čingiz', 'Ajtmatov'),
(7, 'Ludvík', 'Aškenazy'),
(8, 'Jane', 'Austenová'),
(9, 'Hana', 'Andronikova'),
(10, 'Giovanni', 'Boccaccio'),
(11, 'Petr', 'Bezruč'),
(12, 'Václav Beneš', 'Třebízský'),
(13, 'Lev Nikolajevič', 'Tolstoj'),
(14, 'Karel Josef', 'Beneš'),
(15, 'Egon', 'Bondy'),
(16, 'Hermann', 'Broch'),
(17, 'Jindřích Šimon', 'Baar'),
(18, '', 'Zuzana Bubílková, Miloslav Šimek'),
(19, 'Eduard', 'Bass'),
(20, 'Michail', 'Bulgakov'),
(21, 'Adolf', 'Branald'),
(22, 'Václav', 'Bartuška'),
(23, 'Miroslav', 'Ivanov'),
(24, 'Alois', 'Jirásek'),
(25, 'Radek', 'John'),
(26, 'Zdeněk', 'Jirotka'),
(27, '', 'Kosmas'),
(28, 'Jaromír', 'John'),
(29, 'James', 'Joyce'),
(30, 'Miloš', 'Kratochvíl'),
(31, 'Jack', 'Kreouac'),
(32, 'Rudolf', 'Kalčík'),
(33, 'Stephen', 'King'),
(34, 'Franz', 'Kafka'),
(35, 'Pavel', 'Kohout'),
(36, 'Ivan', 'Klíma'),
(37, 'Jan', 'Otčenášek'),
(38, 'Jiří', 'Orten'),
(39, 'George', 'Orwell'),
(40, 'Ivan', 'Olbracht'),
(41, 'Oliver', 'Pötzsch'),
(42, 'Lenka', 'Procházková'),
(43, 'Halina', 'Pawlowská'),
(44, 'Karel', 'Poláček'),
(45, 'Edgar Allan', 'Poe'),
(46, 'Jan', 'Pelc'),
(47, 'Petr', 'Placák'),
(48, 'Alexander Sergejevič', 'Puškin'),
(49, 'Boris', 'Polejov'),
(50, 'Petr', 'Prouza'),
(51, 'Vladimír', 'Páral'),
(52, 'Boleslaw', 'Prus'),
(53, 'Jaroslav', 'Putík'),
(54, 'Karel', 'Ptáčník'),
(55, 'Karel', 'Pecka'),
(56, 'Hana', 'Poltikovičova'),
(57, 'Stopy', 'Blesku'),
(58, 'Honoré de', 'Balzac'),
(59, 'Charles', 'Bukowski'),
(60, 'Charles', 'Baudelaire'),
(61, 'Biebl', 'Konstantin'),
(62, 'Václav Pavel', 'Borovička'),
(63, 'Pierre', 'Clostermann'),
(64, 'Paulo', 'Coelho'),
(65, 'František Ladislav', 'Čelakovský'),
(66, 'James', 'Clavell'),
(67, 'Karel Matěj', 'Čapek-Chod'),
(68, 'Karel', 'Čapek'),
(69, '', 'Karel a Josef Čapkovi'),
(70, 'Josef', 'Čapek'),
(71, 'Petr', 'Čerbák'),
(72, 'Anto Pavlovič', 'Čechov');

-- --------------------------------------------------------

--
-- Struktura tabulky `books`
--

CREATE TABLE `books` (
  `id` int(11) NOT NULL,
  `ISBN` varchar(40) NOT NULL,
  `name` varchar(50) NOT NULL,
  `author_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `page_count` int(12) NOT NULL,
  `year` int(4) NOT NULL,
  `condition_id` int(1) NOT NULL,
  `place_id` int(2) NOT NULL,
  `genre_id` int(11) NOT NULL,
  `borrowed_by` int(11) DEFAULT NULL,
  `borrow_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `maturita_ready` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Vypisuji data pro tabulku `books`
--

INSERT INTO `books` (`id`, `ISBN`, `name`, `author_id`, `description`, `page_count`, `year`, `condition_id`, `place_id`, `genre_id`, `borrowed_by`, `borrow_time`, `maturita_ready`) VALUES
(4, '', 'Daleká cesta za domovem', 1, '', 0, 1986, 1, 1, 0, NULL, '2019-12-01 12:36:46', 0),
(5, '', 'Návrat na planetu Zemi', 2, '', 0, 1985, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(6, '', 'Smolař menachem mendl', 3, '', 0, 1961, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(7, '', 'Kndidáti existence', 4, '', 0, 1950, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(8, '', 'Náhodné svědectví', 5, '', 0, 1986, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(9, '', 'Stanice Bouřná', 6, '', 0, 1982, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(10, '', 'Ukradený měsíc', 7, '', 0, 1997, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(11, '', 'Pýcha a předsudek', 8, '', 0, 1967, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(12, '80-242-0689-7', 'Zvuk slunečních hodin', 9, '', 0, 2001, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(13, '32-025-79', 'Dekameron', 10, '', 0, 1979, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(14, '22-138-80', 'Jen jedenkrát', 11, '', 0, 1980, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(15, '22-601', 'Bludné duše', 12, '', 0, 1976, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(16, '', 'Falešný kupón', 13, '', 0, 1969, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(17, '', 'Červná pečeť', 14, '', 0, 1976, 3, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(18, '', 'Povídky ze života', 11, '', 0, 1957, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(19, '80-7115-018-5', 'Invalidní sourozenci', 15, '', 0, 1991, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(20, '23-005-66', 'Náměsíčníci', 16, '', 0, 1966, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(21, '01-095-65', 'Osmačtyřicátníci', 17, '', 0, 1965, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(22, '80-856-36-82-4', 'Politici Nevyhynou', 18, '', 0, 1997, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(23, '30113-9', 'Lidé z maringotek', 19, '', 0, 1954, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(24, '80-85906-59-7', 'Psí srdce', 20, '', 0, 1997, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(25, '01-096-65', 'Lůsy', 17, '', 0, 1965, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(26, '80-7198-123-0', 'Severin', 15, '', 0, 1996, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(27, '80-202-0289-7', 'Báječní muži na okřídlených ořích', 21, '', 0, 1992, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(28, '80-86013-88-X', 'Příšerné příběhy', 15, '', 0, 2000, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(29, '80-900090-1-8', 'Polojasno', 22, '', 0, 1990, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(30, '', 'Požár Národního divadla - aneb příliš mnoho náhod', 23, '', 0, 1983, 3, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(31, '', 'Mezi proudy', 24, '', 0, 1949, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(32, '', 'Husitský král díl 2', 24, '', 0, 1950, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(33, '', 'Staré pověsti české', 24, '', 0, 1955, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(34, '', 'Jan Žižka', 24, '', 0, 1955, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(35, '', 'Psohlavci', 24, '', 0, 1951, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(36, '', 'Mezi proudy díl 2', 24, '', 0, 1949, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(37, '', 'Bratrstvo díl 3', 24, '', 0, 1950, 4, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(38, '', 'Mezi proudy díl 2', 24, '', 0, 1965, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(39, '', 'U nás', 24, '', 0, 1952, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(40, '', 'Husitský král díl 1', 24, '', 0, 1950, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(41, '', 'Mezi proudy díl 3', 24, '', 0, 1965, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(42, '', 'Temno', 24, '', 0, 1964, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(43, '', 'Mezi proudy 1', 24, '', 0, 1965, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(44, '', 'Poklad', 24, '', 0, 1950, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(45, '', 'F. L Věk', 24, '', 0, 1972, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(46, '', 'Filosofská historie', 24, '', 0, 1956, 4, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(47, '', 'Skaláci', 24, '', 0, 1959, 4, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(48, '', 'Poklad', 24, '', 0, 1959, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(49, '', 'Memento', 25, '', 0, 2008, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(50, '', 'Staré pověsti české', 24, '', 0, 2009, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(51, '80-7244-008-X', 'Saturnin', 26, '', 0, 1999, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(52, '', 'Kosmova kronika česká', 27, '', 0, 1972, 4, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(53, '', 'F. L Věk díl 3', 24, '', 0, 1972, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(54, '', 'F. L Věk díl 4', 24, '', 0, 1972, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(55, '', 'F. L Věk díl 5', 24, '', 0, 1972, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(56, '', 'U nás díl 1', 24, '', 0, 1973, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(57, '', 'U nás díl 2', 24, '', 0, 1973, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(58, '', 'U nás díl 3', 24, '', 0, 1973, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(59, '', 'U nás díl 4', 24, '', 0, 1973, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(60, '', 'Filosofská historie', 24, '', 0, 1955, 5, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(61, '', 'Modrý Engelbert', 28, '', 0, 1945, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(62, '', 'Odysseus', 29, '', 0, 1993, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(63, '', 'Psohlavci', 24, '', 0, 1951, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(64, '', 'Jan Žižka', 30, '', 0, 1952, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(65, '', 'Jan Hus', 30, '', 0, 1952, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(66, '', 'Podzemníci', 31, '', 0, 1958, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(67, '', 'Král Šumavy a Hraniční kameny', 32, '', 0, 1974, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(68, '', 'Zelená míle', 33, '', 0, 1997, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(69, '', 'Zámek', 34, '', 0, 1995, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(70, '978-80-87391-08-2', 'Proměna a jiné povídnky', 34, '', 0, 2009, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(71, '80-204-0533-X', 'Hvězdná hodnina vrahů', 35, '', 0, 1995, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(72, '80-204-0603.4', 'Konec velkých prázdnin', 35, '', 0, 1996, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(73, '80-204-0198-9', 'Moje první láska', 36, '', 0, 1990, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(74, '', 'Kulhavý Orfeus', 37, '', 0, 1981, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(75, '', 'Hrob nezavřel se', 38, '', 0, 1994, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(76, '', 'Farma zvířat', 39, '', 0, 2004, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(77, '', 'Devatenáct set osmdesát čtyři', 39, '', 0, 2015, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(78, '', 'Nikola šuhaj loupežník', 40, '', 0, 1968, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(79, '', 'Farma zvířat', 39, '', 0, 2008, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(80, '', 'Romeo, Julie a tma', 37, '', 0, 1982, 3, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(81, '', 'Farma zvířat', 39, '', 0, 2004, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(82, '', 'Nikola šuhaj loupežník', 40, '', 0, 1958, 3, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(83, '', 'Biblické příběhy', 40, '', 0, 1958, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(84, '', 'Případ Ludvík', 41, '', 0, 2013, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(85, '', 'Romeo, Julie a tma', 37, '', 0, 1982, 3, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(86, '', 'Růžová dáma', 42, '', 0, 1995, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(87, '', 'Proč jsem se neoběsila', 43, '', 0, 1994, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(88, '', 'Podivné přátelství herce Jesenia', 40, '', 0, 1964, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(89, '', 'Muži v offsidu', 44, '', 0, 1956, 3, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(90, '', 'Krajina stínů', 45, '', 0, 1998, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(91, '', '...A bude hůř', 46, '', 0, 1996, 4, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(92, '', '...A výstupy do údolí', 46, '', 0, 2000, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(93, '80-85872-14-5', 'Zoufalé ženy dělají zoufalé věci', 43, '', 0, 1993, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(94, '80-85906-67-8', 'Medorek', 47, '', 0, 1997, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(95, '', 'Eugen Oněgin', 48, '', 0, 1945, 3, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(96, '', 'Příběh opravdového člověka', 49, '', 0, 1976, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(97, '', 'Příběh opravdového člověka', 49, '', 0, 1949, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(98, '', 'Život střídá smrt', 50, '', 0, 2015, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(99, '80-85843-22-6', 'Playgirls II.', 51, '', 0, 1994, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(100, '', 'Mladý muž & bílá velryba', 51, '', 0, 1973, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(101, '80-85843-38-4', 'Tam za vodou', 51, '', 0, 1995, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(102, '80-86004-01-5', 'Farao', 52, '', 0, 1996, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(103, '80-85843-40-4', 'Mladý muž & bílá velryba', 51, '', 0, 1995, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(104, '80-85906-27-9', 'Plyšový Pes', 53, '', 0, 1996, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(105, '80-85843-03-X', 'Playgirls I.', 51, '', 0, 1994, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(106, '80-86013-07-3', '...A bude hůř', 46, '', 0, 1996, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(107, '', 'Ročník 21', 54, '', 0, 1958, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(108, '', 'V bouři zrál můj hlas', 48, '', 0, 1975, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(109, '80-7108-003-9', 'Motáky nezvěstnému', 55, '', 0, 1990, 4, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(110, '', 'Piková dáma', 48, '', 0, 1955, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(111, '80-7246-008-0', 'Korálky v pupíku', 56, '', 0, 1998, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(112, '80-901931-7-X', '', 57, '', 0, 1996, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(113, '', 'Bylo nás pět', 44, '', 0, 1994, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(114, '', 'Plukovník Chabert a jiné prózy', 58, '', 0, 1957, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(115, '', 'Klapzubova jedenáctka', 19, '', 0, 1963, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(116, '80-85213-79-6', 'Ženy', 59, '', 0, 1995, 4, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(117, '80-7207-091-6', 'Mistr a Markétka', 20, '', 0, 1997, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(118, '', 'Mžikové obrázky', 17, '', 0, 1975, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(119, '', 'Paní komisarka', 17, '', 0, 1965, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(120, '80-204-0619-0', 'Květy zla', 60, '', 0, 1997, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(121, '', 'Bez obav', 61, '', 0, 1958, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(122, '', 'Cirkus humberto', 19, '', 0, 1985, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(123, '80-85890-84-4', 'Sekty satanských bohů', 62, '', 0, 1996, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(124, '80-7214-052-3', 'Dekameron', 10, '', 0, 1997, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(125, '80-206-0046-9', 'Velký cirkus', 63, '', 0, 1948, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(126, '80-7203-241-0', 'Alchymista', 64, '', 0, 1988, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(127, '80-206-0046-9', 'Velký cirkus', 63, '', 0, 1948, 3, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(128, '', 'Mudroslový národu Slovanského ve příslovích', 65, '', 0, 1949, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(129, '80-242-0930-6', 'Král Krysa', 66, '', 0, 1979, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(130, '', 'Antonín Vondrejc', 67, '', 0, 1955, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(131, '', 'Krakatit', 68, '', 0, 0, 5, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(132, '', 'Kapesní povídky', 68, '', 0, 1965, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(133, '80-85612-92-5', 'Továrna na absolutno', 68, '', 0, 1995, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(134, '978-80-7483-054-9', 'Ze života hmyzu', 69, '', 0, 2016, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(135, '978-80-253-1079-3', 'Krakatit', 68, '', 0, 2010, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(136, '80-902384-5-9', 'Válka s mloky a Továrna na absolutno', 68, '', 0, 1998, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(137, '80-7176-702-6', 'Stín kapradiny', 70, '', 0, 1998, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(138, '978-80-7483-006-8', 'Bílá nemoc', 68, '', 0, 2013, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(139, '978-80-7390-063-2', 'Bílá nemoc', 68, '', 0, 2013, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(140, '978-80-87128-53-4', 'Matka', 68, '', 0, 2010, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(141, '978-80-7335-177-9', 'Povídky z jedé a z druhé kapsy', 68, '', 0, 2009, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(142, '80-85637-21-9', 'Zahradníkův rok', 68, '', 0, 1996, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(143, '80-202-0540-3', 'Výlet do španěl', 68, '', 0, 1980, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(144, '22-074-69', 'Hovory s T.G.Masarykem ', 68, '', 0, 1969, 2, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(145, '80-206-0519-3', 'Ještě žiju, doktore', 71, '', 0, 1995, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(146, '80-85770-40-7', 'Drama na lovu', 72, '', 0, 1997, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(147, '', 'Zahradníkův rok', 68, '', 0, 1947, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(148, '978-80-7483-005-1', 'R.U.R', 68, '', 0, 2013, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0),
(149, '22-084-81', 'Válka s mloky', 68, '', 0, 1981, 1, 1, 0, NULL, '2019-12-01 12:37:48', 0);

-- --------------------------------------------------------

--
-- Struktura tabulky `book_requests`
--

CREATE TABLE `book_requests` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `confirmed` int(2) NOT NULL DEFAULT '0',
  `request_added` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

-- --------------------------------------------------------

--
-- Struktura tabulky `conditions`
--

CREATE TABLE `conditions` (
  `id` int(11) NOT NULL,
  `condition` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Vypisuji data pro tabulku `conditions`
--

INSERT INTO `conditions` (`id`, `condition`) VALUES
(1, 'Nová'),
(2, 'Lehce opotřebená');

-- --------------------------------------------------------

--
-- Struktura tabulky `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `genre` varchar(50) COLLATE utf8_czech_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_czech_ci;

--
-- Vypisuji data pro tabulku `genres`
--

INSERT INTO `genres` (`id`, `genre`) VALUES
(1, 'sci-fi'),
(2, 'fantazy'),
(3, 'horror'),
(4, 'drama');

-- --------------------------------------------------------

--
-- Struktura tabulky `places`
--

CREATE TABLE `places` (
  `id` int(11) NOT NULL,
  `place` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Vypisuji data pro tabulku `places`
--

INSERT INTO `places` (`id`, `place`) VALUES
(1, 'Školní 101'),
(2, 'Horská 59'),
(3, 'Horská 618');

-- --------------------------------------------------------

--
-- Struktura tabulky `ratings`
--

CREATE TABLE `ratings` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `book_id` int(11) NOT NULL,
  `rating` decimal(11,1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Struktura tabulky `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `firstname` varchar(15) NOT NULL,
  `lastname` varchar(20) NOT NULL,
  `is_administrator` tinyint(1) NOT NULL,
  `is_librarian` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Klíče pro exportované tabulky
--

--
-- Klíče pro tabulku `authors`
--
ALTER TABLE `authors`
  ADD PRIMARY KEY (`id`);

--
-- Klíče pro tabulku `books`
--
ALTER TABLE `books`
  ADD PRIMARY KEY (`id`);

--
-- Klíče pro tabulku `book_requests`
--
ALTER TABLE `book_requests`
  ADD PRIMARY KEY (`id`);

--
-- Klíče pro tabulku `conditions`
--
ALTER TABLE `conditions`
  ADD PRIMARY KEY (`id`);

--
-- Klíče pro tabulku `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Klíče pro tabulku `places`
--
ALTER TABLE `places`
  ADD PRIMARY KEY (`id`);

--
-- Klíče pro tabulku `ratings`
--
ALTER TABLE `ratings`
  ADD PRIMARY KEY (`id`);

--
-- Klíče pro tabulku `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pro tabulky
--

--
-- AUTO_INCREMENT pro tabulku `authors`
--
ALTER TABLE `authors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=73;
--
-- AUTO_INCREMENT pro tabulku `books`
--
ALTER TABLE `books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=150;
--
-- AUTO_INCREMENT pro tabulku `book_requests`
--
ALTER TABLE `book_requests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pro tabulku `conditions`
--
ALTER TABLE `conditions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT pro tabulku `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pro tabulku `places`
--
ALTER TABLE `places`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT pro tabulku `ratings`
--
ALTER TABLE `ratings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT pro tabulku `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

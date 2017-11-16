-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 16, 2017 at 07:51 PM
-- Server version: 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cside`
--

-- --------------------------------------------------------

--
-- Table structure for table `chatter`
--

CREATE TABLE `chatter` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(25) NOT NULL,
  `message` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chatter`
--

INSERT INTO `chatter` (`id`, `name`, `message`) VALUES
(1, 'Admin', 'Hello.'),
(4, 'Admin', 'This is a test.'),
(5, 'Admin', 'The test works fine.'),
(14, 'Another computer', 'Yay, I made it!'),
(12, 'Someone else', 'Oh hey, I\'m someone else!'),
(13, 'Admin', 'Oh hi, someone else!'),
(25, 'Admin', 'Another one, just for good measure.'),
(24, 'Admin', 'All clear.');

-- --------------------------------------------------------

--
-- Table structure for table `chatter_test`
--

CREATE TABLE `chatter_test` (
  `id_test` int(10) UNSIGNED NOT NULL,
  `name` varchar(25) NOT NULL,
  `message` varchar(200) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chatter_test`
--

INSERT INTO `chatter_test` (`id_test`, `name`, `message`) VALUES
(1, 'John Doe', 'Will it blend?');

-- --------------------------------------------------------

--
-- Table structure for table `news_item`
--

CREATE TABLE `news_item` (
  `title` varchar(75) NOT NULL,
  `picture` varchar(150) NOT NULL,
  `description` varchar(300) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `news_item`
--

INSERT INTO `news_item` (`title`, `picture`, `description`) VALUES
('New Economic Plan Announced By The Prime Minister', 'http://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAApYAAAAJDc4ZDVhN2ExLTljOGQtNDZlNC04YTY3LTcwNjU1MzQ1ODk1OQ.jpg', 'As a result of the country\'s current economic climate, the Prime Minister has decided to base the country\'s economic plan on how many gold you can find in the pot at the end of a rainbow, and everyone gets to pay a total tax amount of a tenth of the amount in that pot.'),
('Soccer To Become Obsolete By 2050', 'http://images.mentalfloss.com/sites/default/files/sb10066898c-001.jpg', 'Based on scientific research and theorizing, scientists conclude that soccer, as we currently know it, will become obsolete roughly 30 years from now, and will be replaced by zero-gravity football where the goals are never in a fixed position.'),
('Opinion Piece: Can Death Grips Be The Future Of Music?', 'http://i.ytimg.com/vi/8hUY4cyw9Bo/maxresdefault.jpg', 'Six years ago, Death Grips took the music nerd demographic by storm with their mix of punk rock, hip hop and noise. With this in mind, it is entirely possible that a lot of popular music will sound like them in 50 years\' time, for no reason other than that is simply the way popular music works.'),
('How To Make Quality Casserole', 'http://del.h-cdn.co/assets/17/33/980x490/landscape-1502989071-chicken-rice-casserole-delish.jpg', 'As sponsored by Casserole Company, Ltd., here is our comprehensive tutorial on how to make a quality casserole for dinner. First you need a bowl, and in it you put sour cheese, cottage cheese, mozzarella cheese, beef, noodles and some other ingredients and eventually you get the casserole.'),
('Your Future Just Might Be In The Cards!', 'http://c.tribune.com.pk/2017/10/1544814-horoscope-1509335533-324-640x480.jpg', 'The Daily Crystal would like to remind you to check your horoscope results. Remember: no matter if you\'re a Leo, Virgin, Taurus or Cancer, you will never be able to be with the celebrity you idolize.'),
('Here\'s A Picture Of A Cat That Will Warm Your Heart', 'http://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg', 'The boss said there needed to be six stories in this page and we were out of ideas, so we just resorted to our fail-safe plan: a picture of a cat. Isn\'t the cat cute?');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chatter`
--
ALTER TABLE `chatter`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `chatter_test`
--
ALTER TABLE `chatter_test`
  ADD PRIMARY KEY (`id_test`),
  ADD UNIQUE KEY `id_test` (`id_test`,`name`,`message`),
  ADD UNIQUE KEY `id_test_2` (`id_test`,`name`,`message`),
  ADD UNIQUE KEY `id_test_3` (`id_test`,`name`,`message`);

--
-- Indexes for table `news_item`
--
ALTER TABLE `news_item`
  ADD UNIQUE KEY `title` (`title`),
  ADD UNIQUE KEY `picture` (`picture`),
  ADD UNIQUE KEY `description` (`description`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chatter`
--
ALTER TABLE `chatter`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
--
-- AUTO_INCREMENT for table `chatter_test`
--
ALTER TABLE `chatter_test`
  MODIFY `id_test` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

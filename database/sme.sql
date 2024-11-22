-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 25, 2024 at 11:30 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sme`
--

-- --------------------------------------------------------

--
-- Table structure for table `activations`
--

CREATE TABLE `activations` (
  `Distributors` varchar(200) DEFAULT NULL,
  `Dealer_Name` varchar(200) DEFAULT NULL,
  `Outlet_Name` varchar(200) DEFAULT NULL,
  `Region` varchar(200) DEFAULT NULL,
  `District` varchar(200) DEFAULT NULL,
  `Activation_SIM` int(20) DEFAULT NULL,
  `Date` date DEFAULT NULL,
  `Tariff_Plan` varchar(200) DEFAULT NULL,
  `Amount` int(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `agents`
--

CREATE TABLE `agents` (
  `id` bigint(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `msisdn` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `role` enum('agents') NOT NULL,
  `status` enum('active','inactive') NOT NULL DEFAULT 'inactive',
  `distributor` varchar(200) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `feasibility_reports`
--

CREATE TABLE `feasibility_reports` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `feasibility_sent_date` date NOT NULL,
  `customer_name` varchar(200) NOT NULL,
  `address` varchar(200) NOT NULL,
  `district` varchar(200) NOT NULL,
  `service_type` varchar(200) NOT NULL,
  `bandwidth_primary` varchar(200) NOT NULL,
  `latitude` varchar(200) DEFAULT NULL,
  `longitude` varchar(200) DEFAULT NULL,
  `site_id` varchar(200) NOT NULL,
  `site_latitude` varchar(200) DEFAULT NULL,
  `site_longitude` varchar(200) DEFAULT NULL,
  `distance` varchar(200) DEFAULT NULL,
  `l1_status` varchar(200) DEFAULT NULL,
  `l1_reason` varchar(200) DEFAULT NULL,
  `l1_completion_date` date DEFAULT NULL,
  `port_info` varchar(200) DEFAULT NULL,
  `l2_remarks` varchar(200) DEFAULT NULL,
  `l2_reason` varchar(200) DEFAULT NULL,
  `customer_contact_name` varchar(200) DEFAULT NULL,
  `contact_number` varchar(200) DEFAULT NULL,
  `mail` varchar(200) DEFAULT NULL,
  `sam` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `role` varchar(100) DEFAULT NULL,
  `latitude` varchar(300) DEFAULT NULL,
  `longitude` varchar(300) DEFAULT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `company` varchar(50) NOT NULL,
  `contact_person` varchar(50) NOT NULL,
  `contact_number` varchar(50) NOT NULL,
  `product_name` varchar(150) DEFAULT NULL,
  `quantity` varchar(150) NOT NULL,
  `revenue` varchar(150) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`id`, `user_id`, `name`, `role`, `latitude`, `longitude`, `start_date`, `end_date`, `company`, `contact_person`, `contact_number`, `product_name`, `quantity`, `revenue`, `createdAt`, `updatedAt`) VALUES
(19, 25, 'Shweta Thapa', 'Supervisor', '27.705344', '85.311488', '2023-04-24 00:00:00', '2023-04-24 00:00:00', 'google', 'bananapple', '9803304061', 'Biz 649', '200', '1000', '2023-04-25 05:59:12', '2023-04-25 05:59:12'),
(20, 26, 'Anup Pandey', 'Supervisor', '27.705344', '85.311488', '2023-04-23 00:00:00', '2023-04-24 00:00:00', 'Apple', 'ggezz11111', '9803304061', 'Biz 909', '2', '1000', '2023-04-25 06:14:52', '2023-04-25 06:14:52'),
(21, 27, 'Shekhar Agrawal', 'Supervisor', '27.7165796', '85.3132345', '2023-04-22 00:00:00', '2023-04-23 00:00:00', 'Apple', 'banana', '9803304061', 'Biz 389', '200', '1000', '2023-04-25 06:17:23', '2023-04-25 06:17:23'),
(22, 25, 'Shweta Thapa', 'Supervisor', '27.716613', '85.31337', '2023-04-23 00:00:00', '2023-04-24 00:00:00', 'Amazon', 'banana', '9803304061', 'Biz 299', '200', '1000', '2023-04-25 06:25:41', '2023-04-25 06:25:41'),
(23, 17, 'Sagun Shrestha', 'Agent', '27.7182353', '85.3143568', '2023-04-23 00:00:00', '2023-04-24 00:00:00', 'Amazon river', 'banana', '9803304061', 'Biz 149', '200', '10000', '2023-04-25 06:42:09', '2023-04-25 06:42:09'),
(24, 1, 'Kalpesh budhathoki', 'Agent', '27.7175752', '85.3142348', '2023-04-22 00:00:00', '2023-04-24 00:00:00', 'google', 'banana', '9803304061', 'Internet', '20', '200', '2023-04-25 06:42:49', '2023-04-25 06:42:49'),
(25, 1, 'Kalpesh budhathoki', 'Agent', '27.7173492', '85.3137257', '2023-04-22 00:00:00', '2023-04-24 00:00:00', 'ABCD', 'banana', '9803304061', 'Biz 189', '200', '1000', '2023-04-25 06:48:13', '2023-04-25 06:48:13'),
(26, 16, 'Mandip Pokhrel', 'Agent', NULL, NULL, '2023-05-06 00:00:00', '2023-05-06 00:00:00', 'Amazon', 'banana', '9803304061', 'Internet', '200', '1000', '2023-04-27 04:09:46', '2023-04-27 04:09:46'),
(27, 6, 'Binay Raj Dangol', 'Agent', '27.7182737', '85.314463', '2023-05-05 00:00:00', '2023-05-06 00:00:00', 'Amazon', 'apple', '9803304061', 'Student Plan', '10', '200', '2023-04-27 10:59:17', '2023-04-27 10:59:17'),
(28, 30, 'Shekhar Agrawal', 'Supervisor', '27.716003', '85.3132965', '2023-06-05 00:00:00', '2023-06-06 00:00:00', 'google', 'banana', '9803304061', 'Biz 389', '4', '1000', '2023-06-06 04:27:29', '2023-06-06 04:27:29'),
(29, 26, 'Anup Pandey', 'Supervisor', '27.7159059', '85.3135703', '2023-06-06 00:00:00', '2023-06-06 00:00:00', 'Amazon forest', 'banana', '9803304061', 'Biz 149', '20', '1000', '2023-06-06 05:36:46', '2023-06-06 05:36:46'),
(30, 30, 'Shekhar Agrawal', 'Supervisor', '27.7161408', '85.3134821', '2023-06-05 00:00:00', '2023-05-24 00:00:00', 'Amazon', 'banana', '9803304061', 'Biz 499', '200', '200', '2023-06-06 11:11:27', '2023-06-06 11:11:27'),
(31, 25, 'Shweta Thapa', 'Supervisor', '27.7086208', '85.3147648', '2023-04-05 00:00:00', '2023-04-07 00:00:00', 'Apple', 'banana', '9803304061', 'Biz 389', '2', '1000', '2023-06-06 11:26:23', '2023-06-06 11:26:23'),
(32, 26, 'Anup Pandey', 'Agent', '27.7086208', '85.3147648', '2023-04-05 00:00:00', '2023-04-07 00:00:00', 'Apple', 'banana', '9803304061', 'Biz 499', '2', '200', '2023-06-06 11:27:55', '2023-06-06 11:27:55'),
(33, 26, 'Anup Pandey', 'Agent', '27.7086208', '85.3147648', '2023-06-05 00:00:00', '2023-05-11 00:00:00', 'Amazon', 'banana', '9803304061', 'Biz 149', '2', '200', '2023-06-06 11:30:03', '2023-06-06 11:30:03'),
(34, 17, 'Sagun Shrestha', 'Supervisor', '27.7159145', '85.3135824', '2023-06-18 00:00:00', '2023-06-19 00:00:00', 'hh', 'banana', '9803304061', 'Biz 909', '200', '1000', '2023-06-19 05:25:43', '2023-06-19 05:25:43'),
(35, 26, 'Anup Pandey', 'Supervisor', '27.7158002', '85.3133819', '2023-06-18 00:00:00', '2023-06-18 00:00:00', 'google', 'banana', '9803304061', 'Biz 649', '200', '200', '2023-06-19 06:12:31', '2023-06-19 06:12:31'),
(36, 25, 'Shweta Thapa', 'Supervisor', '27.7162993', '85.3132655', '2023-07-20 00:00:00', '2023-07-20 00:00:00', 'Amazon', 'banana', '9803304061', 'Biz 259', '2', '23', '2023-07-21 04:53:27', '2023-07-21 04:53:27');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20230215110519-create_users_table.js'),
('20230215110520-create_visitreport_table.js'),
('20230216054032-create_sales_table.js'),
('20230724060721-create_users_table.js'),
('20230724064451-create_users_table.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `msisdn` varchar(50) NOT NULL,
  `password` varchar(150) NOT NULL,
  `role` enum('admin','supervisors','agents') NOT NULL,
  `distributor` varchar(100) DEFAULT NULL,
  `created_by` varchar(150) DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT 'inactive',
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `msisdn`, `password`, `role`, `distributor`, `created_by`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 'Kalpesh budhathoki', 'kalpeshbudhathoki1997@gmail.com', '9803304061', 'sha1$115d72e4$1$ed76b00d7cdd857117f1eb41880526d8cbd720a4', 'admin', NULL, NULL, 'active', '2023-02-28 11:38:20', '2023-02-28 11:38:20'),
(6, 'Binay Raj Dangol', 'binay.dangol@ncell.axiata.com', '9802100331', 'sha1$4a03262f$1$bf0a3f165dedd34e064e63502903abbb56534501', 'admin', NULL, NULL, 'active', '2023-03-09 06:13:45', '2023-03-09 06:13:45'),
(16, 'Mandip Pokhrel', 'mandip.pokharel@ncell.axiata.com', '9802100290', 'sha1$f65a83e9$1$b90b3b7d6696836c0aa77af07854bf6dadc4dda6', 'admin', NULL, NULL, 'active', '2023-03-25 03:09:30', '2023-03-25 03:09:30'),
(17, 'Sagun Shrestha', 'sagun.shrestha@ncell.axiata.com', '9802100526', 'sha1$62a87b88$1$9e919ae8963936f9de4fda18b1edf519d65f388a', 'admin', NULL, NULL, 'active', '2023-03-25 03:10:48', '2023-03-25 03:10:48'),
(25, 'Shweta Thapa', 'shweta@gmail.com', '123', 'sha1$11a7f9bb$1$0d0d6a6905475b6bca08f94bab1b20c76f4b5d72', 'agents', 'Kantipur', NULL, 'active', '2023-04-24 10:46:52', '2023-04-24 10:46:52'),
(26, 'Anup Pandey', 'anup@gmail.com', '1', 'sha1$b30ed0e3$1$2d3d4f6c87f51d7e71eec378a78d136a79af7c11', 'supervisors', 'null', NULL, 'active', '2023-04-24 10:54:43', '2023-04-24 10:54:43'),
(28, 'Ram Thapa agent', 'thapa@gmail.com', '69', 'sha1$7b528e38$1$78432d12ceae46aa578652e9a1bd9d505571c0b7', 'agents', 'Triple Eight Trading Concern', 'Anup Pandey', 'active', '2023-05-03 11:43:34', '2023-05-03 11:43:34'),
(29, 'Sagun thapa', 'saguntest.shrestha@ncell.axiata.com', '9', 'sha1$22b14074$1$2c59ba5400161b0cfb4d8c8eb8855e6ce2f98c48', 'admin', NULL, NULL, 'active', '2023-05-22 09:15:27', '2023-05-22 09:15:27'),
(30, 'Shekhar Agrawal', 'shekhar@gmail.com', '909', 'sha1$0b5bf863$1$1daf81e90ca25e59acd5185380b3594bdbee00aa', 'supervisors', 'Chapagain Trade House', 'Kalpesh budhathoki', 'active', '2023-06-05 10:18:07', '2023-06-05 10:18:07'),
(31, 'Anoj Giri', 'giri@gmail.com', '007', 'sha1$a0f6e250$1$b5327aab6b437b399a2e5ffce856ed3c71d7a4f6', 'supervisors', 'null', 'Kalpesh budhathoki', 'active', '2023-06-13 03:27:36', '2023-06-13 03:27:36'),
(32, 'test supervisor', 'test2@gmail.com', '9803304061', 'sha1$8601b79f$1$1a46cbaf9a08c1ceeb08862a7d302468647ed707', 'supervisors', 'null', 'Kalpesh budhathoki', 'active', '2023-06-19 05:27:44', '2023-06-19 05:27:44'),
(33, 'Ram', 'ramgg@gmail.com', '00', 'sha1$08562b2c$1$22ae3f06d08e8644c3759ba2b450683cacc4e98e', 'supervisors', 'null', 'Kalpesh budhathoki', 'active', '2023-06-19 05:30:31', '2023-06-19 05:30:31'),
(35, 'new supervisor', 'new@gmail.com', '800', 'sha1$2b28b322$1$5e85fc0d67da3db26253cf23fba0d5aa0a453056', 'supervisors', 'Triple Eight Trading Concern', 'Kalpesh budhathoki', 'active', '2023-07-24 06:58:14', '2023-07-24 06:58:14');

-- --------------------------------------------------------

--
-- Table structure for table `visits`
--

CREATE TABLE `visits` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `latitude` varchar(300) DEFAULT NULL,
  `longitude` varchar(300) DEFAULT NULL,
  `date` datetime NOT NULL,
  `company` varchar(50) NOT NULL,
  `opportunity` varchar(150) NOT NULL,
  `account_type` varchar(150) NOT NULL,
  `contact_person` varchar(50) DEFAULT NULL,
  `phone_number` varchar(20) DEFAULT NULL,
  `segment` varchar(50) NOT NULL,
  `remarks` varchar(150) NOT NULL,
  `created_by` varchar(150) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `visits`
--

INSERT INTO `visits` (`id`, `user_id`, `name`, `role`, `latitude`, `longitude`, `date`, `company`, `opportunity`, `account_type`, `contact_person`, `phone_number`, `segment`, `remarks`, `created_by`, `createdAt`, `updatedAt`) VALUES
(99, 25, 'Shweta Thapa', 'Supervisor', '27.7169533', '85.3136893', '2023-05-02 00:00:00', 'Amazon', 'Bizlite', 'Hot', 'banana', '9803304061', 'Private', 'ggez', 'Kalpesh budhathoki', '2023-05-03 11:25:38', '2023-05-03 11:25:38'),
(100, 26, 'Anup Pandey', 'Supervisor', '27.7162823', '85.3133219', '2023-06-01 00:00:00', 'Amazon', 'SME Biz Plan', 'Hot', 'banana', '9803304061', 'Private', 'test 1', 'Kalpesh budhathoki', '2023-06-02 04:32:45', '2023-06-02 04:32:45'),
(101, 27, 'Shekhar Agrawal', 'Agent', '27.7168876', '85.3139804', '2023-06-02 00:00:00', 'Amazon', 'Bizlite', 'Cold', 'banana', '9803304061', 'Government', 'test2', 'Kalpesh budhathoki', '2023-06-02 04:34:28', '2023-06-02 04:34:28'),
(102, 28, 'Ram Thapa agent', 'Agent', '27.7151744', '85.3147648', '2023-06-01 00:00:00', 'Apple', 'Internet', 'Cold', 'banana', '123456', 'Government', 'test3', 'Kalpesh budhathoki', '2023-06-02 04:35:12', '2023-06-02 04:35:12'),
(103, 26, 'Anup Pandey', 'Supervisor', '27.7151744', '85.3147648', '2023-06-01 00:00:00', 'Apple', 'SME Biz Plan', 'Hot', 'bananapplepineapple', '9803304061', 'Private', 'hhhh', 'Kalpesh budhathoki', '2023-06-02 04:35:55', '2023-06-02 04:35:55'),
(104, 29, 'Sagun thapa', 'Supervisor', '27.7151744', '85.3147648', '2023-06-03 00:00:00', 'google', 'Bizlite', 'Cold', 'banana', '7777', 'IT company', 'test6', 'Kalpesh budhathoki', '2023-06-02 04:37:52', '2023-06-02 04:37:52'),
(105, 6, 'Binay Raj Dangol', 'Agent', '27.7151744', '85.3147648', '2023-06-02 00:00:00', 'Amazon', 'Bizlite', 'Hot', 'banana', '9803304061', 'Private', 'ggez', 'Kalpesh budhathoki', '2023-06-02 04:38:46', '2023-06-02 04:38:46'),
(107, 26, 'Anup Pandey', 'Supervisor', '27.7151744', '85.3147648', '2023-06-08 00:00:00', 'Apple', 'SME Biz Plan', 'Hot', 'bananapple', '9803304061', 'Private', 'hahahaha', 'Kalpesh budhathoki', '2023-06-09 06:32:53', '2023-06-09 06:32:53'),
(108, 26, 'Anup Pandey', 'Supervisor', '27.7151744', '85.3147648', '2023-06-04 00:00:00', 'google', 'Bizlite', 'Hot', '1234567', '9803304061', 'IT company', 'test', 'Anup Pandey', '2023-06-09 09:31:47', '2023-06-09 09:31:47'),
(110, 30, 'Shekhar Agrawal', 'Supervisor', '27.7151744', '85.3147648', '2023-06-05 00:00:00', 'Apple', 'Internet', 'Hot', 'ggezz11111', '9803304061', 'Private', 'hh', 'Kalpesh budhathoki', '2023-06-12 09:22:03', '2023-06-12 09:22:03'),
(111, 16, 'Mandip Pokhrel', 'Supervisor', '27.7160417', '85.3131826', '2023-06-18 00:00:00', 'Amazon', 'Bizlite', 'Hot', 'banana', '9803304061', 'Private', 'test', 'Kalpesh budhathoki', '2023-06-19 05:19:24', '2023-06-19 05:19:24'),
(112, 17, 'Sagun Shrestha', 'Supervisor', '27.7158487', '85.3133862', '2023-06-17 00:00:00', 'google', 'Internet', 'Hot', 'bananapple', '9803304061', 'Government', 'heheh', 'Kalpesh budhathoki', '2023-06-19 05:21:12', '2023-06-19 05:21:12'),
(113, 26, 'Anup Pandey', 'Supervisor', '27.7157929', '85.3132573', '2023-06-18 00:00:00', 'google', 'Internet', 'Hot', 'banana', '9803304061', 'Government', 'test', 'Anup Pandey', '2023-06-19 06:16:30', '2023-06-19 06:16:30'),
(114, 25, 'Shweta Thapa', 'Supervisor', '27.7162009', '85.3131753', '2023-07-20 00:00:00', 'Amazon', 'Internet', 'Hot', 'bananapple', '9803304061', 'Government', 'test', 'Shweta Thapa', '2023-07-21 04:52:57', '2023-07-21 04:52:57');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agents`
--
ALTER TABLE `agents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feasibility_reports`
--
ALTER TABLE `feasibility_reports`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `visits`
--
ALTER TABLE `visits`
  ADD UNIQUE KEY `id` (`id`) USING BTREE,
  ADD KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `agents`
--
ALTER TABLE `agents`
  MODIFY `id` bigint(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `feasibility_reports`
--
ALTER TABLE `feasibility_reports`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `visits`
--
ALTER TABLE `visits`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `sales`
--
ALTER TABLE `sales`
  ADD CONSTRAINT `sales_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `visits`
--
ALTER TABLE `visits`
  ADD CONSTRAINT `visits_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

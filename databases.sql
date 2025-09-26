-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: e_comerce
-- ------------------------------------------------------
-- Server version	8.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `add_to_cart`
--

DROP TABLE IF EXISTS `add_to_cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `add_to_cart` (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NOT NULL,
  `productId` int NOT NULL,
  `Qty` varchar(45) NOT NULL,
  `total_price` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id_idx` (`userId`),
  KEY `product_id_idx` (`productId`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `add_to_cart`
--

LOCK TABLES `add_to_cart` WRITE;
/*!40000 ALTER TABLE `add_to_cart` DISABLE KEYS */;
INSERT INTO `add_to_cart` VALUES (3,15,5,'2','130000');
/*!40000 ALTER TABLE `add_to_cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_product`
--

DROP TABLE IF EXISTS `user_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `product_name` varchar(45) DEFAULT NULL,
  `product_description` text,
  `product_price` varchar(45) DEFAULT NULL,
  `product_img` varchar(145) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_product`
--

LOCK TABLES `user_product` WRITE;
/*!40000 ALTER TABLE `user_product` DISABLE KEYS */;
INSERT INTO `user_product` VALUES (5,'Iphone 16','The iPhone 16 (launched September 2024) features a sleek aluminum and glass design, a Super Retina XDR OLED display (6.1\" or 6.7\" on Plus), and Apple’s new A18 chip for faster performance and AI integration. It has a 48 MP main camera, improved low-light and video capabilities, a new Camera Control button, and supports only eSIM (no physical SIM). With Wi-Fi 7, MagSafe charging, and up to 27 hours video playback (Plus model), it’s built for speed, photography, and long battery life.','65,000','[\"1758841961972.png\",\"1758841961984.png\",\"1758841961991.png\"]'),(6,'men 3 piece','A modern two‐piece coat and pant suit designed for comfort and style. Crafted from a lightweight cotton‐blend fabric with a subtle stretch, this suit ensures breathability and ease of movement. The coat features a single-breast cut with soft shoulders, two front flap pockets, and a two-button fastening. The pants are tailored slim-straight with a little taper, featuring a zip fly, belt loops, and side pockets. Fully lined only in key areas (back panel and sleeves) to keep weight down and enhance comfort. Available in classic colors like navy, charcoal or light grey so it suits work, events and casual wear. Priced at approximately ₹10,000, this suit gives you great value — stylish look, good fit, and wear-all-day comfort.','10,000','[\"1758842152843.png\",\"1758842152837.png\",\"1758842152845.png\"]'),(7,'ladies kurti','A stylish ladies kurti designed with both comfort and elegance in mind. Made from breathable cotton-blend fabric, it is soft on the skin and perfect for all-day wear. The kurti features a modern straight-cut silhouette with three-quarter sleeves and a round neck, giving a graceful yet contemporary look. Subtle embroidery and printed patterns add charm, making it suitable for casual outings, office wear, or festive occasions. Lightweight and easy to maintain, this kurti combines traditional style with modern comfort — an essential piece for every wardrobe.','999','[\"1758842376403.png\",\"1758842376404.png\",\"1758842376408.png\"]'),(8,'Air Conditioners','Experience cool, comfortable air without burning a hole in your wallet. This LG 3-Star air conditioner delivers a balanced blend of energy efficiency, effective cooling, and user-friendly features. Equipped with a rotary compressor and either copper or aluminium condenser coils, it maintains steady temperature while keeping noise low. Features like Auto Restart, Sleep / Sweet Dreamz Mode, timer control, and dual protection / dust filters ensure clean air, minimal fuss, and restful nights. Ideal for small to medium sized rooms; it cools fast, runs quietly, and keeps electricity bills under control thanks to its 3-star BEE rating.','25,000','[\"1758842624394.png\",\"1758842624395.png\",\"1758842624395.png\"]'),(9,'water fridge','Keep your food fresher for longer with this LG refrigerator designed for modern kitchens. Featuring a sleek stainless steel finish (or stone black / glossy option), it offers large capacity with intelligently divided compartments for easy organization — including crispers for vegetables, multi-temperature racks, and dedicated shelves for dairy or beverages. With inverter compressor technology, it runs quietly and efficiently, reducing energy consumption while maintaining consistent cooling. Smart features like turbo cooling, frost-free operation, LED interior lighting, and handy door alarms improve user experience. Reliable build, good insulation, and efficient cooling make this fridge well-suited for daily family use, balancing performance and power-savings in one stylish appliance.','12,500','[\"1758842758622.png\",\"1758842758622.png\",\"1758842758625.png\"]'),(10,'LED 4k','Elevate your viewing experience with this LG Smart TV, designed for immersive entertainment and smart living. With a crisp 4K UHD LED display (or option for HD/FHD on smaller models), it delivers sharp visuals and vivid colours. The AI-powered processor upscales non-4K content, adjusts brightness based on room lighting, and enhances picture clarity. Built-in smart features include webOS (LG’s platform), voice assistants (AI ThinQ, support for Google Assistant / Alexa), streaming apps (Netflix, Prime, etc.), Bluetooth and HDMI ports for easy connectivity, and modes like Filmmaker Mode / Game Optimizer for optimized viewing. The design is sleek with thin bezels and minimal stand profile, paired with reliable audio tuning and energy efficient operation.','56,000','[\"1758842890417.png\",\"1758842890419.png\",\"1758842890425.png\"]'),(11,'ps5','The PlayStation 5 is Sony’s next-generation gaming console offering ultra-fast SSD loading, stunning 4K visuals, and immersive 3D audio. Its DualSense controller features adaptive triggers and haptic feedback for realistic gameplay. With ray tracing, backward compatibility for PS4 games, and a sleek modern design, the PS5 delivers high-performance gaming and entertainment for both casual and hardcore gamers.','1,40,000','[\"1758843011328.png\",\"1758843011332.png\",\"1758843011336.png\"]');
/*!40000 ALTER TABLE `user_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_table`
--

DROP TABLE IF EXISTS `user_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_table` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_first_name` varchar(45) NOT NULL,
  `user_last_name` varchar(45) DEFAULT NULL,
  `user_email` varchar(45) NOT NULL,
  `user_password` varchar(145) DEFAULT NULL,
  `user_address` varchar(45) NOT NULL,
  `user_roles` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_table`
--

LOCK TABLES `user_table` WRITE;
/*!40000 ALTER TABLE `user_table` DISABLE KEYS */;
INSERT INTO `user_table` VALUES (1,'Md','Owais','owais@gmail.com','$2a$10$u9YBvTMc5C6SfNBTn6vV4ecozW2K/er9Q6PFpwz2csOPAVOudFzGu','18-425-238A,Charminar,Hyderabad',NULL),(15,'Md','Shoaib','shoain@gmail.com',NULL,'18-7-425-238-A,Charminar,Hyderabad',NULL);
/*!40000 ALTER TABLE `user_table` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-26 17:00:13

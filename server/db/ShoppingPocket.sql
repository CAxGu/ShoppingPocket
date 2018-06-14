CREATE DATABASE  IF NOT EXISTS `ShoppingPocket` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `ShoppingPocket`;
-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: ShoppingPocket
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Categorias`
--

DROP TABLE IF EXISTS `Categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Categorias` (
  `id_cat` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(45) NOT NULL,
  `cat_pic` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_cat`),
  UNIQUE KEY `id_cat_UNIQUE` (`id_cat`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categorias`
--

LOCK TABLES `Categorias` WRITE;
/*!40000 ALTER TABLE `Categorias` DISABLE KEYS */;
INSERT INTO `Categorias` VALUES (1,'Calzoncillos','calzoncillos.jpeg'),(2,'Calcetines','calcetines.jpeg'),(3,'Bragas','bragas.jpeg'),(4,'Sujetadores','sujetadores.jpeg'),(5,'Pantis y Medias','pantimedias.jpeg'),(6,'Leotardos','leotardos.jpeg'),(7,'De Interior','interior.jpeg');
/*!40000 ALTER TABLE `Categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Categorias_Subcategorias`
--

DROP TABLE IF EXISTS `Categorias_Subcategorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Categorias_Subcategorias` (
  `idCategorias_Subcategorias` int(11) NOT NULL AUTO_INCREMENT,
  `id_categoria` int(11) NOT NULL,
  `id_subcategoria` int(11) NOT NULL,
  PRIMARY KEY (`idCategorias_Subcategorias`),
  UNIQUE KEY `idCategorias_Subcategorias_UNIQUE` (`idCategorias_Subcategorias`),
  KEY `fk_Categorias_Subcategorias_1_idx` (`id_categoria`),
  KEY `fk_Categorias_Subcategorias_2_idx` (`id_subcategoria`),
  CONSTRAINT `fk_Categorias_Subcategorias_1` FOREIGN KEY (`id_categoria`) REFERENCES `Categorias` (`id_cat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Categorias_Subcategorias_2` FOREIGN KEY (`id_subcategoria`) REFERENCES `Subcategorias` (`id_subcat`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Categorias_Subcategorias`
--

LOCK TABLES `Categorias_Subcategorias` WRITE;
/*!40000 ALTER TABLE `Categorias_Subcategorias` DISABLE KEYS */;
INSERT INTO `Categorias_Subcategorias` VALUES (1,1,1),(2,1,2),(3,1,3),(4,2,9),(5,2,10),(6,2,11),(7,3,4),(8,3,5),(9,3,6),(10,3,7),(11,3,8),(12,5,12),(13,5,13),(14,5,14),(15,5,15);
/*!40000 ALTER TABLE `Categorias_Subcategorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Discounts`
--

DROP TABLE IF EXISTS `Discounts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Discounts` (
  `idDiscounts` int(11) NOT NULL AUTO_INCREMENT,
  `codeDiscount` varchar(45) NOT NULL,
  `ammount` int(11) NOT NULL,
  `end_date` varchar(255) DEFAULT NULL,
  `id_user_discount` int(11) NOT NULL,
  `used_discount` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`idDiscounts`),
  KEY `fk_Discounts_1_idx` (`id_user_discount`),
  CONSTRAINT `fk_Discounts_1` FOREIGN KEY (`id_user_discount`) REFERENCES `Users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Discounts`
--

LOCK TABLES `Discounts` WRITE;
/*!40000 ALTER TABLE `Discounts` DISABLE KEYS */;
/*!40000 ALTER TABLE `Discounts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MainCategorias`
--

DROP TABLE IF EXISTS `MainCategorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MainCategorias` (
  `id_maincat` int(11) NOT NULL AUTO_INCREMENT,
  `maincat_name` varchar(45) NOT NULL,
  `maincat_pic` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_maincat`),
  UNIQUE KEY `id_maincat_UNIQUE` (`id_maincat`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MainCategorias`
--

LOCK TABLES `MainCategorias` WRITE;
/*!40000 ALTER TABLE `MainCategorias` DISABLE KEYS */;
INSERT INTO `MainCategorias` VALUES (1,'Mujer','woman.jpeg'),(2,'Hombre','men.jpeg'),(3,'Los Más Peques','baby.jpeg'),(4,'Novedades','news.jpg'),(5,'Ninos','lboy.jpeg'),(6,'Ninas','lgirl.jpeg');
/*!40000 ALTER TABLE `MainCategorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MainCategorias_Categorias`
--

DROP TABLE IF EXISTS `MainCategorias_Categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MainCategorias_Categorias` (
  `idMainCategorias_Categorias` int(11) NOT NULL AUTO_INCREMENT,
  `id_maincategoria` int(11) NOT NULL,
  `id_categoria` int(11) NOT NULL,
  PRIMARY KEY (`idMainCategorias_Categorias`),
  UNIQUE KEY `idMainCategorias_Categorias_UNIQUE` (`idMainCategorias_Categorias`),
  KEY `id_maincat_idx` (`id_maincategoria`),
  KEY `id_cat_idx` (`id_categoria`),
  CONSTRAINT `id_cat` FOREIGN KEY (`id_categoria`) REFERENCES `Categorias` (`id_cat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_maincat` FOREIGN KEY (`id_maincategoria`) REFERENCES `MainCategorias` (`id_maincat`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MainCategorias_Categorias`
--

LOCK TABLES `MainCategorias_Categorias` WRITE;
/*!40000 ALTER TABLE `MainCategorias_Categorias` DISABLE KEYS */;
INSERT INTO `MainCategorias_Categorias` VALUES (1,1,2),(2,1,3),(3,1,4),(4,1,5),(5,1,7),(6,2,1),(7,2,2),(8,2,7),(9,3,1),(10,3,2),(11,3,3),(12,3,6),(13,5,1),(14,5,2),(15,5,7),(16,6,2),(17,6,3),(18,6,4),(19,6,5),(20,6,7);
/*!40000 ALTER TABLE `MainCategorias_Categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Marcas`
--

DROP TABLE IF EXISTS `Marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Marcas` (
  `id_brand` int(11) NOT NULL AUTO_INCREMENT,
  `brand_name` varchar(45) NOT NULL,
  `brand_url` varchar(45) DEFAULT NULL,
  `brand_pic` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_brand`),
  UNIQUE KEY `id_brand_UNIQUE` (`id_brand`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Marcas`
--

LOCK TABLES `Marcas` WRITE;
/*!40000 ALTER TABLE `Marcas` DISABLE KEYS */;
INSERT INTO `Marcas` VALUES (1,'Ysabel Mora','','ysabellogo.jpeg'),(2,'Abanderado','','abanderadologo.jpeg'),(3,'Selene',NULL,'selenelogo.jpeg'),(4,'Princesa','','princesalogo.jpeg'),(5,'Gisela','','giselalogo.jpeg'),(6,'Irina','','irinalogo.jpeg'),(7,'Playtex','','playtexlogo.jpeg'),(8,'Naiara','','naiaralogo.jpeg');
/*!40000 ALTER TABLE `Marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Mercados`
--

DROP TABLE IF EXISTS `Mercados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Mercados` (
  `idMercado` int(11) NOT NULL AUTO_INCREMENT,
  `place` varchar(45) DEFAULT NULL,
  `ini_time` varchar(45) DEFAULT NULL,
  `end_time` varchar(45) DEFAULT NULL,
  `merca_date` varchar(45) DEFAULT NULL,
  `lat` varchar(50) DEFAULT NULL,
  `lng` varchar(50) DEFAULT NULL,
  `picture` varchar(255) DEFAULT NULL,
  `markerpic` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idMercado`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Mercados`
--

LOCK TABLES `Mercados` WRITE;
/*!40000 ALTER TABLE `Mercados` DISABLE KEYS */;
INSERT INTO `Mercados` VALUES (1,'Ontinyent','8:00','14:30','Lunes','38.81383661','-0.60594802','market1.jpeg','marker1.jpeg'),(2,'Almansa','8:30','14:30','Miércoles','38.87159587','-1.0989595','market2.jpeg','marker2.jpeg');
/*!40000 ALTER TABLE `Mercados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Products` (
  `id_prod` int(11) NOT NULL AUTO_INCREMENT,
  `EAN` varchar(45) NOT NULL,
  `prod_name` varchar(255) NOT NULL,
  `color` varchar(45) NOT NULL,
  `size` varchar(45) NOT NULL,
  `prize` int(11) NOT NULL,
  `stock` int(11) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `prod_pic` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `repo_date` varchar(255) DEFAULT NULL,
  `brand` int(11) DEFAULT NULL,
  `maincategory` int(11) NOT NULL,
  `category` int(11) NOT NULL,
  `subcategory` int(11) NOT NULL,
  PRIMARY KEY (`id_prod`),
  KEY `maincategory_idx` (`maincategory`),
  KEY `category_idx` (`category`),
  KEY `subcategory_idx` (`subcategory`),
  KEY `brand_idx` (`brand`),
  CONSTRAINT `brand` FOREIGN KEY (`brand`) REFERENCES `Marcas` (`id_brand`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `category` FOREIGN KEY (`category`) REFERENCES `Categorias` (`id_cat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `maincategory` FOREIGN KEY (`maincategory`) REFERENCES `MainCategorias` (`id_maincat`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `subcategory` FOREIGN KEY (`subcategory`) REFERENCES `Subcategorias` (`id_subcat`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES (1,'971379628020','Paquete Calcetin Tobillero','surtido1','39-42',6,60,'','tobipack2.jpeg','Unos calcetines muy chulis de chica de ysabel mora','',1,1,2,9),(2,'978020137962','Paquete Calcetin Tobillero','surtido1','35-40',13,60,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(3,'796280297130','Paquete Calcetin Tobillero','surtido1','39-42',6,5,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(4,'796971328020','Paquete Calcetin','surtido1','35-40',12,36,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(5,'902071379628','Paquete Calcetin Tobillero','surtido1','40-42',8,33,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(6,'928713796020','Paquete Calcetin Tobillero','surtido1','35-39',8,12,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(7,'962809713720','Calcetin Tobillero','surtido1','39-42',8,20,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(8,'971379628020','Paquete Calcetin Tobillero','surtido1','39-42',7,60,'','tobipack2.jpeg','Unos calcetines muy chulis de chica','',1,1,2,9),(9,'971380207962','Tobillero','surtido1','40-46',7,15,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(10,'978020137962','Paquete Calcetin Tobillero','surtido1','35-40',13,60,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(11,'979628713020','Paquete Calcetin Tobillero','surtido1','38-42',5,40,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(12,'971379234020','Paquete Tobillero','surtido1','39-42',6,60,'','tobipack2.jpeg','Unos calcetines muy chulis de chica','',3,1,2,9);
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Purchases`
--

DROP TABLE IF EXISTS `Purchases`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Purchases` (
  `id_Purchase` int(11) NOT NULL AUTO_INCREMENT,
  `id_client` int(11) DEFAULT NULL,
  `id_prod` int(11) NOT NULL,
  `uds_prod` int(11) NOT NULL,
  `date_purchase` varchar(255) NOT NULL,
  PRIMARY KEY (`id_Purchase`),
  UNIQUE KEY `id_Purchase_UNIQUE` (`id_Purchase`),
  KEY `fk_Purchases_1_idx` (`id_client`),
  KEY `fk_Purchases_2_idx` (`id_prod`),
  CONSTRAINT `fk_Purchases_1` FOREIGN KEY (`id_client`) REFERENCES `Users` (`id_user`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_Purchases_2` FOREIGN KEY (`id_prod`) REFERENCES `Products` (`id_prod`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Purchases`
--

LOCK TABLES `Purchases` WRITE;
/*!40000 ALTER TABLE `Purchases` DISABLE KEYS */;
/*!40000 ALTER TABLE `Purchases` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Subcategorias`
--

DROP TABLE IF EXISTS `Subcategorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Subcategorias` (
  `id_subcat` int(11) NOT NULL AUTO_INCREMENT,
  `subcat_name` varchar(45) NOT NULL,
  `subcat_pic` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_subcat`),
  UNIQUE KEY `id_subcat_UNIQUE` (`id_subcat`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Subcategorias`
--

LOCK TABLES `Subcategorias` WRITE;
/*!40000 ALTER TABLE `Subcategorias` DISABLE KEYS */;
INSERT INTO `Subcategorias` VALUES (1,'Boxer','boxer.jpeg'),(2,'Slip','slip.jpeg'),(3,'Clasico','clasico.jpeg'),(4,'Algodon','balgodon.jpeg'),(5,'Lycra','blycra.jpeg'),(6,'Tangas','tanga.jpeg'),(7,'Braga Faja','bfaja.jpeg'),(8,'Ofertas','ofertas.jpeg'),(9,'Tobilleros','tobillero.jpeg'),(10,'Deportivo','deportivo.jpeg'),(11,'Botas','bota.jpeg'),(12,'Mini-media','minimedia.jpeg'),(13,'Pantys','pantys.jpeg'),(14,'Tobillera','tobillera.jpeg'),(15,'De vestir','vestir.jpeg');
/*!40000 ALTER TABLE `Subcategorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Users` (
  `id_user` int(30) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) DEFAULT NULL,
  `lastname` varchar(150) DEFAULT NULL,
  `birthdate` varchar(15) DEFAULT NULL,
  `email` varchar(60) DEFAULT NULL,
  `id_social` varchar(30) DEFAULT NULL,
  `username` varchar(45) DEFAULT NULL,
  `adress` varchar(255) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `profile_pic` varchar(255) DEFAULT NULL,
  `favorites` int(11) DEFAULT NULL,
  `token` varchar(3000) DEFAULT NULL,
  `token_recover` varchar(3000) DEFAULT NULL,
  `active` int(1) NOT NULL DEFAULT '0',
  `role` int(11) NOT NULL DEFAULT '0',
  `salt` varchar(255) DEFAULT NULL,
  `hash` varchar(3000) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-05-28  1:02:12

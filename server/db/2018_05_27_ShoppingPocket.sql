CREATE DATABASE  IF NOT EXISTS `ShoppingPocket` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `ShoppingPocket`;
-- MySQL dump 10.13  Distrib 5.7.21, for Linux (x86_64)
--
-- Host: localhost    Database: ShoppingPocket
-- ------------------------------------------------------
-- Server version	5.7.21-0ubuntu0.16.04.1

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
  UNIQUE KEY `idCategorias_Subcategorias_UNIQUE` (`idCategorias_Subcategorias`)
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
INSERT INTO `Products` VALUES (1,'971379628020','Paquete Calcetin Tobillero','surtido1','39-42',6,60,'','tobipack2.jpeg','Unos calcetines muy chulis de chica','',1,1,2,9),(2,'978020137962','Paquete Calcetin Tobillero','surtido1','35-40',13,60,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(3,'796280297130','Paquete Calcetin Tobillero','surtido1','39-42',6,5,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(4,'796971328020','Paquete Calcetin','surtido1','35-40',12,36,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(5,'902071379628','Paquete Calcetin Tobillero','surtido1','40-42',8,33,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(6,'928713796020','Paquete Calcetin Tobillero','surtido1','35-39',8,12,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(7,'962809713720','Calcetin Tobillero','surtido1','39-42',8,20,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(8,'971379628020','Paquete Calcetin Tobillero','surtido1','39-42',7,60,'','tobipack2.jpeg','Unos calcetines muy chulis de chica','',1,1,2,9),(9,'971380207962','Tobillero','surtido1','40-46',7,15,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(10,'978020137962','Paquete Calcetin Tobillero','surtido1','35-40',13,60,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(11,'979628713020','Paquete Calcetin Tobillero','surtido1','38-42',5,40,'','tobipack.jpeg','Unos calcetines muy chulis','',1,2,2,9),(12,'971379234020','Paquete Tobillero','surtido1','39-42',6,60,'','tobipack2.jpeg','Unos calcetines muy chulis de chica','',3,1,2,9);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Purchases`
--

LOCK TABLES `Purchases` WRITE;
/*!40000 ALTER TABLE `Purchases` DISABLE KEYS */;
INSERT INTO `Purchases` VALUES (1,1,2,2,'2018-05-15 21:35:38.749'),(2,1,9,4,'2018-05-15 21:35:38.749'),(3,1,7,1,'2018-05-15 21:35:38.749');
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
  `active` int(1) NOT NULL DEFAULT '0',
  `role` int(11) NOT NULL DEFAULT '0',
  `salt` varchar(255) DEFAULT NULL,
  `hash` varchar(3000) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,NULL,NULL,NULL,'pepito@pepito.com',NULL,'pepito',NULL,NULL,'https://lh4.googleusercontent.com/24YSpxmsbI0eczsiCibn4dFD1Ew9gFxqsMX79krUtRWhQ2XN_B3Rw-PG2SSAoT8qEql2E-2WfIwZeZALFy11=w1366-h650',NULL,NULL,1,0,'a6d7b2934673b438994644cf820af670','8a498d1aa43a0dfa5df93dac5fecc35ca6dec7c8a54af29a78d24a8c5d61e801ed2ecc764941bcd75ea95bcf6988283622e4f09be9e66d8c8eff6492c4deb98f3868ea1a7e4de52598281bc4f91014e50028023e4110ddab9f1cf5e0bcf9ac4a57ba2133ecf8b423923f7089388543192c470591cf3fe9b030006405e5afaa4e364ce3dcb6ba3f1d0353312c61f5ced8907472f2f09c5841b865e18ec1d5f316f09fb570dad84c6556b3dfe7b94e1288a3d1fce06230236f0a83df847ac1e86b5aa1e39b8ed8751b84ee10600ee795e3945a6c7fd4a1a1e63fa87211d0cc0bfc3b64d94af528008626e8702dfe4ee1c5099b2e9cdec5e5137cc0c0411ad7fca789b69936f6280e2951cd7ce0b6a56a07cc90b0b9c407b31f4511c619264eaec8dc669418cc0343d0e33769b826f10f39f886190fd4e358fa7079f71a3615547d9a0def7097b52710a4e9b60f0b9d84a14c6bd08b56dea2fe78bd9e8003aa3dd58060aeddd28256ebfde1399fc1addadcca7f8010ba002c11e1dfb8c68acd18525d0a761cce92b2bb8b0027f262ea00cf680808012c71fbd5b5d38f37f1b04bb0d1fc5d0673b2b490466c5141f8932422614cc250ea858a83ab32208a8c80ef6ba1a468d9241ba4887cc1f1489ee159481c7da53ee33449b4c05885590c64f26f29a76cc02bb368ecc9e32aac7fdbaf03abe482c130c17b39ca6cfff4f5a91d23'),(12,'Shopping Pocket',NULL,NULL,'shoppingpocketseo@gmail.com','110088607004663378784','shoppingpocketseo',NULL,NULL,'https://lh5.googleusercontent.com/-iQ3fFp-sIys/AAAAAAAAAAI/AAAAAAAAAAA/AIcfdXAl_G4qQY0UYTs0bwYto65RmGbyGg/s96-c/photo.jpg',NULL,NULL,1,1,'0e203203cc0c6917c86163a33558812c','6ce2ea671d16a4940826e50702589d84c16ec53906c60dfab0b38e29ea7efb70b35d355d3ab2e76008d416c8957b43f5ee9f641968961c5bfe31629b93dc81d9b2613bdcb0971cb39d1a381494943b937b8f82a894ce904f5428e3ba4974471df3d8afabb1a55e47cc27556db5cc7ad3c31a998d5c15fbc8b0357e38c1f1c741bd20e8a37a99efa686d88e1c2312369e05ecabfc1bfbbea8910d6b5c757feece595e6aa1c769dd8a345ab509273881f3ca12cfe35e527c91a3345fca348fcaee8994c1d415f9371d72acbce49f0bd05ec895c9008560136fafd4b84bab79149fb70e784558686fde97a7fadea32cb42354d34c73125235536f02e9c99737cf454268bb83170cc48039d5af0dc173efc1f36c4ada0361b00c5707be045b5ac7c25e8f88aec4ab67f1fb32317843ff18991548252bd1e07eb3018f7b0f93594e9d5d167d7fb00dba6ba35767307606fa6c750fdd0c46fc83954188695b17962c418af610981e7ac96fbf8d2fbafb2919001e154705108e6f160336709e06cc66deba9aac018e14350a304baa9c130eed4a1331da9d734c3b2a366945bfd190b049501410a3105360f62d30356410ea61c1e2d3ca4703c3051b0c4aa9efaf04b88cb275dad5ea01978cbebe5763e1610c4d80dba5647048f62e31333adce8be92f249a8526f3bc8ea39d31da55d7a9abf0c0af01fffd63849b2cacb605df8585ea6'),(24,NULL,NULL,NULL,'caxelcastex@gmail.com',NULL,'safasffas',NULL,NULL,NULL,NULL,'',1,0,'3d2f6797246e2ab09fbbb79f8d534b7b','9201298a22ce4d411ec92acdb2aabfa089f5fd442c241c02c4a76eafd18e9942011a4c98ce8fa06952b81d66db1c9c6a6d4acf8d16f709526ba83c7c763e574aef259eccebe55e06200ad0f0e6dbb73aab8a4f6e23e4c2cd07d6bd2005e64d4f398033b1c344a28a57c2950cf74df611e4303416bfa52b216a1ad8dea21bf8aee79b4af065a620e79cd33d7b2f19a62d9253b8c632d0b9e5afb375262c8893a05ade4d8a9361f9fa84d4a0f0ca302a3db99b524076a0b36b5fc3721d407a1f840b128d3a9d13bd64c5168b301e963def650335f96bd40909d83d744b8f7b699e385cee16017a6a4dba1c40475f1a4165b6eec855b10059f538da7adcd82381c7c1ada4b653ed5f62656c79cbb6dd94ad87a28dc6cfec9d2b0092a1c862d22ab022f8cdf60843eebeea3cea54ef0cc43ec69a40edd6207e333ff3b1275a0e5d2b40ba5b372d954ecdce115b3b99eaa74e813d0fe6b6c709888f049825c3d5462d333000a4075768774a3520d93eaf0a2d1312fbdd876714611feb23e1d0d2576ebcd1ed16fe5b45fe70c7db35a5e866bc84f8f4071bd215ab966e20dbf0ff12edc5178230e5c11b10d993a5df2d176bf51009d25da6e5d5c8f40dfd4356e86a860d019ccb805deade4a2b124aa7df12b2ad7a893bc1b7d0f5ffd29c6eff82d95e5e7af20cbf0bd467e6a54fd6bc439a237229091e0993149c994f3379016803ff');
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

-- Dump completed on 2018-05-20 22:45:50

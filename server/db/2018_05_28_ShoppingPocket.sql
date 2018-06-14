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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Discounts`
--

LOCK TABLES `Discounts` WRITE;
/*!40000 ALTER TABLE `Discounts` DISABLE KEYS */;
INSERT INTO `Discounts` VALUES (4,'M4ZIFBFNROL20ZCLPQY4V2',10,NULL,1,1),(5,'0EN8DBYGGDRFWR9C6QFH6JC',10,NULL,1,0),(7,'0DF714DLRV3VWDCEY7W79',10,NULL,32,1),(8,'XR8YUJ52E0JE1ODBDNMR0G',10,NULL,33,1),(9,'3J7GHAA3SSE50CMG25VNO3',10,NULL,33,0),(10,'A7A2B0G78Q70UC3DBUFVJ5',10,NULL,32,0);
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
  UNIQUE KEY `id_brand_UNIQUE` (`id_brand`),
  FULLTEXT KEY `index3` (`brand_name`)
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
  FULLTEXT KEY `cosas` (`EAN`,`prod_name`,`color`,`size`,`description`),
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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Purchases`
--

LOCK TABLES `Purchases` WRITE;
/*!40000 ALTER TABLE `Purchases` DISABLE KEYS */;
INSERT INTO `Purchases` VALUES (1,1,2,2,'2018-05-15 21:35:38.749'),(2,1,9,4,'2018-05-15 21:35:38.749'),(3,1,7,1,'2018-05-15 21:35:38.749'),(15,1,2,2,'2018-05-26 14:13:24.172'),(16,1,2,1,'2018-05-26 14:22:46.936'),(17,1,4,1,'2018-05-26 14:22:46.936'),(18,1,3,6,'2018-05-26 14:27:01.408'),(19,NULL,2,2,'2018-05-26 19:34:22.864'),(20,NULL,1,4,'2018-05-27 00:29:24.559'),(22,32,3,5,'2018-05-27 20:36:12.476'),(23,33,1,5,'2018-05-27 20:39:20.874'),(24,33,2,1,'2018-05-27 20:40:19.159'),(25,32,12,4,'2018-05-27 20:51:37.881');
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,NULL,NULL,NULL,'pepito@pepito.com',NULL,'pepito',NULL,NULL,'',NULL,NULL,NULL,1,0,'a6d7b2934673b438994644cf820af670','8a498d1aa43a0dfa5df93dac5fecc35ca6dec7c8a54af29a78d24a8c5d61e801ed2ecc764941bcd75ea95bcf6988283622e4f09be9e66d8c8eff6492c4deb98f3868ea1a7e4de52598281bc4f91014e50028023e4110ddab9f1cf5e0bcf9ac4a57ba2133ecf8b423923f7089388543192c470591cf3fe9b030006405e5afaa4e364ce3dcb6ba3f1d0353312c61f5ced8907472f2f09c5841b865e18ec1d5f316f09fb570dad84c6556b3dfe7b94e1288a3d1fce06230236f0a83df847ac1e86b5aa1e39b8ed8751b84ee10600ee795e3945a6c7fd4a1a1e63fa87211d0cc0bfc3b64d94af528008626e8702dfe4ee1c5099b2e9cdec5e5137cc0c0411ad7fca789b69936f6280e2951cd7ce0b6a56a07cc90b0b9c407b31f4511c619264eaec8dc669418cc0343d0e33769b826f10f39f886190fd4e358fa7079f71a3615547d9a0def7097b52710a4e9b60f0b9d84a14c6bd08b56dea2fe78bd9e8003aa3dd58060aeddd28256ebfde1399fc1addadcca7f8010ba002c11e1dfb8c68acd18525d0a761cce92b2bb8b0027f262ea00cf680808012c71fbd5b5d38f37f1b04bb0d1fc5d0673b2b490466c5141f8932422614cc250ea858a83ab32208a8c80ef6ba1a468d9241ba4887cc1f1489ee159481c7da53ee33449b4c05885590c64f26f29a76cc02bb368ecc9e32aac7fdbaf03abe482c130c17b39ca6cfff4f5a91d23'),(12,'Shopping Pocket',NULL,NULL,'shoppingpocketseo@gmail.com','110088607004663378784','shoppingpocketseo',NULL,NULL,'https://lh5.googleusercontent.com/-iQ3fFp-sIys/AAAAAAAAAAI/AAAAAAAAAAA/AIcfdXAl_G4qQY0UYTs0bwYto65RmGbyGg/s96-c/photo.jpg',NULL,NULL,NULL,1,1,'0e203203cc0c6917c86163a33558812c','6ce2ea671d16a4940826e50702589d84c16ec53906c60dfab0b38e29ea7efb70b35d355d3ab2e76008d416c8957b43f5ee9f641968961c5bfe31629b93dc81d9b2613bdcb0971cb39d1a381494943b937b8f82a894ce904f5428e3ba4974471df3d8afabb1a55e47cc27556db5cc7ad3c31a998d5c15fbc8b0357e38c1f1c741bd20e8a37a99efa686d88e1c2312369e05ecabfc1bfbbea8910d6b5c757feece595e6aa1c769dd8a345ab509273881f3ca12cfe35e527c91a3345fca348fcaee8994c1d415f9371d72acbce49f0bd05ec895c9008560136fafd4b84bab79149fb70e784558686fde97a7fadea32cb42354d34c73125235536f02e9c99737cf454268bb83170cc48039d5af0dc173efc1f36c4ada0361b00c5707be045b5ac7c25e8f88aec4ab67f1fb32317843ff18991548252bd1e07eb3018f7b0f93594e9d5d167d7fb00dba6ba35767307606fa6c750fdd0c46fc83954188695b17962c418af610981e7ac96fbf8d2fbafb2919001e154705108e6f160336709e06cc66deba9aac018e14350a304baa9c130eed4a1331da9d734c3b2a366945bfd190b049501410a3105360f62d30356410ea61c1e2d3ca4703c3051b0c4aa9efaf04b88cb275dad5ea01978cbebe5763e1610c4d80dba5647048f62e31333adce8be92f249a8526f3bc8ea39d31da55d7a9abf0c0af01fffd63849b2cacb605df8585ea6'),(32,'ShoppingPocket Seo',NULL,NULL,'shoppingpocketseo2@gmail.com','112996848399050828390','shoppingpocketseo2',NULL,NULL,'https://lh5.googleusercontent.com/-aQfVnkeIN-o/AAAAAAAAAAI/AAAAAAAAAAA/AIcfdXCaIgm24Ov1kkneUgCT6a8JC1gPgg/s96-c/photo.jpg',NULL,NULL,NULL,1,0,'c362ee438374cded9fb19be36d72ae37','23f2f13bd6962c009736f0c6f776c6fd154c817025a900e47c0c612ada3a661ae953c028ba7f4120445060a92aabf080d013c98c4c6217e7e11144d2dc3cfc9a774728d08fbe4e86bfa274b0a1f22eba31151119cac502c04df830d45ebdfcab9496c990568862f98be58fd18551af416481cdb633793a731f90f2577f241ad1fc285854224106d6527a9abeb1a992f5d569ee0cf1e490ecefc9401c60154b3dcee48fdb00e1df0edb68ea995342604bdc449e32fcdbaa7a4533084a8c06abd742dfe428266b118352d473d0d94eabdae0ecf24ee52a3408b5641181fb5775eab3e926e309918c2e7a853022d5c2bded16b2c75d1de91334894b935a9281fb7cf65936adce7d0d6752e06202bc1d367ef2a15933f23402f62099458e2e0da632b8b0aff6873697e96ac72bf97f31161ff06fe1f7fe28b249ecf9e8c4d56c0f5cee775607f0ba170242f7fba1d060bd4b8a2e9a47a3ce87ac79b7d8c11e529929447a87733c5c2366a3928d24c677747c8925e43eab56fd826ef19e545d13c2158dffdae78ee8a3dd2a257b6cb36fca0105bc04a4d83003061494d32f8f446443e74871c0e3be446b9408a47d8382b5c142782df46f716875438b667c9ba44277a9a4e28c51c92eb653e60909805121855df39e1595edd53e0456f938d51e498cbd3c9eb6a9b9d8d69337f241bb76c2c852b37d734e901f6c1a06b16676c5a1e4'),(33,'Carlos Axel Castex Gudiño',NULL,NULL,'caxelcastex@gmail.com','114993659293146971734','caxelcastex',NULL,NULL,'https://lh6.googleusercontent.com/-tmc1HekgE9w/AAAAAAAAAAI/AAAAAAAAAAo/WmxWxpHE2d4/s96-c/photo.jpg',NULL,NULL,NULL,1,0,'f16d6d174870fc014628f8ef976c2845','efa2b070d25bac33dfc74b09600801a34a0b189bf0e9a8f15043d1ecdbce9b5cd797a5bfba4524996f87f4a1ee87c57398d7f05212815aa50c4f1f065ccdbcbcb96899f98ff7c09abced7bfe4b596953809cbc96370da746408410b999869b65207011e36a726410123585ab5f175c7213867a3e37c77034b4addfa85b9cb9a0a1d7c57f574b5f2cb0270ae3f5000b8417753393c1268bb37986a6872a62386e10e471002d0f1e3bf777221639035a894573fba8da2cb8ec22c8e6e117b5a7979abea3783ee4f1606a37657e79c187a75f74421adc02d1129ce33d370993f2399cf1450cf3a33482436b2083dd9e9c68e3848796119f1b74d23d77fef10bbb9bfef0619c2bc1d7bcf801a349a851110502f1f38a889ef11c61d50123ba8d447259b5936c45729e1c9aa7c05147d92f4c872dbabd95c686374b174651922b4b20f9ef593edc37e20d0d92f6a4d3220955688c8d742e370aea4ce1e324093b48cd325978a417a4cb967157c489fcf986ea879df0be51897cabbb93ef8a4130cbbf59c066c790948b6ad4bccf1cccbf6caf32455f2d0a973b6dd270816e3a9ec4b8446fe9e2082970f4877e68b1e3c63485319832c956ebcf8b4777d71a0f910166d31d5ce2e8c3c83a2059fa5b14450e5a3aa43f41b682922456c615db82b2e48355f7d2af2296f7e6d590d8d5ddfc39d729f10a1aff9e6a923bfe912e1fbee063');
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

-- Dump completed on 2018-05-27 20:54:44

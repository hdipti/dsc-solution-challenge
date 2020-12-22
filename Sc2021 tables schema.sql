drop table sc2021_schema.authors;
drop table sc2021_schema.posts;
drop table sc2021_schema.comments;
drop table sc2021_schema.candidates;
drop table sc2021_schema.login;

CREATE TABLE IF NOT EXISTS sc2021_schema.`authors` (
  `author_ID` INT UNSIGNED unsigned NOT NULL AUTO_INCREMENT,
  `author_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `author_description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`author_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS sc2021_schema.`posts` (
  `post_ID` INT UNSIGNED unsigned NOT NULL AUTO_INCREMENT,
  `author_ID` INT UNSIGNED unsigned NOT NULL,
  `date` datetime NOT NULL,
  `content` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `status` varchar(20) COLLATE utf8_bin NOT NULL DEFAULT 'draft',
  `post_type` varchar(10) COLLATE utf8_bin NOT NULL,
  `like_count` int(10) unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`post_ID`),
  CONSTRAINT fk_author_ID
    FOREIGN KEY (`author_ID` ) 
        REFERENCES `authors` (`author_ID` )
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS sc2021_schema.`comments` (
  `comment_ID` INT UNSIGNED unsigned NOT NULL AUTO_INCREMENT,
  `post_ID` INT UNSIGNED unsigned NOT NULL,
  `comment_count` INT UNSIGNED unsigned NOT NULL,
  `comment_author` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_author_IP` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `comment_date` datetime NOT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `approved` tinyint(4) NOT NULL DEFAULT '0',
  `like_count` int(10) unsigned NOT NULL,
  PRIMARY KEY (`comment_ID`),
  CONSTRAINT fk_post_ID
  FOREIGN KEY (`post_ID`) 
	REFERENCES `posts`(`post_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS sc2021_schema.`candidates` (
  `candidate_ID` INT UNSIGNED unsigned NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`candidate_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS sc2021_schema.`login` (
  `login_ID` INT UNSIGNED unsigned NOT NULL AUTO_INCREMENT,
  `candidate_ID` INT UNSIGNED unsigned NOT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`login_ID`),
  CONSTRAINT fk_candidate_ID
  FOREIGN KEY (`candidate_ID`) 
	REFERENCES `candidates`(`candidate_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin AUTO_INCREMENT=1 ;

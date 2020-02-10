-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le :  jeu. 06 fév. 2020 à 10:57
-- Version du serveur :  5.7.26
-- Version de PHP :  7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données :  `wildcircus`
--

-- --------------------------------------------------------

--
-- Structure de la table `article`
--

CREATE TABLE `article` (
  `article_id` int(11) NOT NULL,
  `article_name` varchar(250) NOT NULL,
  `date` date NOT NULL,
  `description` text NOT NULL,
  `id_categorie` int(11) NOT NULL,
  `id_user_name` int(11) NOT NULL,
  `id_photocard` int(11) NOT NULL,
  `paragraphes` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `article`
--

INSERT INTO `article` (`article_id`, `article_name`, `date`, `description`, `id_categorie`, `id_user_name`, `id_photocard`, `paragraphes`) VALUES
(1, 'Informations pratiques', '2020-01-01', 'Retrouvez toutes les informations concernant l\'accès au cirque, les tarifs enfants et adultes', 3, 1, 5, ''),
(2, 'King : la star du cirque', '2019-08-06', 'Depuis 4 ans, King l\'éléphant fait son show au Wild-Circus. Venez le rencontrer', 2, 1, 4, ''),
(3, 'Le Wild Circus depuis 1854', '2017-07-10', 'Depuis 1854, le cirque propose des shows entourés de professionnels et d\'animaux du monde', 1, 1, 1, ''),
(4, 'Popy : Au top de sa paresse', '2020-01-15', 'Nous fêtons l\'anniversaire de Popy. L\'animal se porte très bien.', 2, 1, 3, ''),
(5, 'Duchesse : Le tigre a faim', '2019-10-20', 'Duchesse attend avec impatience son prochain show pour manger un petit enfant du public', 2, 1, 2, ''),
(6, 'Les tarifs 2020', '2020-01-01', 'Retrouvez ici tous les tarifs adultes, enfant et de groupe', 3, 1, 6, '');

-- --------------------------------------------------------

--
-- Structure de la table `article_photos`
--

CREATE TABLE `article_photos` (
  `id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `photos_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `categorie`
--

CREATE TABLE `categorie` (
  `categorie_id` int(11) NOT NULL,
  `cat_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `categorie`
--

INSERT INTO `categorie` (`categorie_id`, `cat_name`) VALUES
(1, 'History of Wild Circus'),
(2, 'Animals'),
(3, 'Informations'),
(4, 'Tous');

-- --------------------------------------------------------

--
-- Structure de la table `gallery`
--

CREATE TABLE `gallery` (
  `id` int(11) NOT NULL,
  `name-photogallery` varchar(200) NOT NULL,
  `url` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `gallery`
--

INSERT INTO `gallery` (`id`, `name-photogallery`, `url`) VALUES
(1, 'womans ', 'https://i.postimg.cc/HLfjSkyJ/vintage-circus-performers-in-strabane-1910-1911-07.jpg'),
(2, 'man', 'https://i.postimg.cc/90cmSRFf/vintage-circus-performers-in-strabane-1910-1911-04.jpg'),
(3, 'tigers', 'https://i.postimg.cc/85SNJJvb/il-fullxfull-3143161121.jpg'),
(4, 'hippo', 'https://i.postimg.cc/nrSykCXg/Hippopotamus-and-Performer-Great-Rayman-Circus-Madras-India-198.jpg'),
(5, 'clowns', 'https://i.postimg.cc/bvL3b4DF/54359b4897c2f9d66777319af78e3bd7.jpg'),
(6, 'smile clown', 'https://i.postimg.cc/FR78KhWx/633ffa7d330fc780dd1a6e32791c7e45.jpg'),
(7, 'tiger', 'https://i.postimg.cc/XNt5Q5hg/isabella-juskova-SQszo1m-P4sk-unsplash.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `photocard`
--

CREATE TABLE `photocard` (
  `id` int(11) NOT NULL,
  `name_photocard` varchar(250) NOT NULL,
  `url` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `photocard`
--

INSERT INTO `photocard` (`id`, `name_photocard`, `url`) VALUES
(1, 'Old Circus man', 'https://i.postimg.cc/Vkz24kSD/old-Circus.jpg'),
(2, 'Duchesse', 'https://i.postimg.cc/65FyGFyW/tigre3.jpg'),
(3, 'paresseux oklm', 'https://i.postimg.cc/5yYf4N5w/paresseux2.jpg'),
(4, 'king elephant', 'https://i.postimg.cc/DZtwbXwC/elephant4.jpg'),
(5, 'infos', 'https://i.postimg.cc/DfL2MmZT/circussituation.jpg'),
(6, 'tickets', 'https://i.postimg.cc/qMFtMPTG/ticket-Picture.jpg');

-- --------------------------------------------------------

--
-- Structure de la table `photos`
--

CREATE TABLE `photos` (
  `id` int(11) NOT NULL,
  `name_photos` int(11) NOT NULL,
  `url` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Structure de la table `useradmin`
--

CREATE TABLE `useradmin` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `mail` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `useradmin`
--

INSERT INTO `useradmin` (`id`, `name`, `mail`, `password`, `lastname`) VALUES
(1, 'Timothée', 'tim@test.com', 'test', 'Diot');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `article`
--
ALTER TABLE `article`
  ADD PRIMARY KEY (`article_id`),
  ADD KEY `id_categorie` (`id_categorie`),
  ADD KEY `id_user_name` (`id_user_name`),
  ADD KEY `id_photocard` (`id_photocard`);

--
-- Index pour la table `article_photos`
--
ALTER TABLE `article_photos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `article_id` (`article_id`),
  ADD KEY `photos_id` (`photos_id`);

--
-- Index pour la table `categorie`
--
ALTER TABLE `categorie`
  ADD PRIMARY KEY (`categorie_id`);

--
-- Index pour la table `gallery`
--
ALTER TABLE `gallery`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `photocard`
--
ALTER TABLE `photocard`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id` (`id`),
  ADD KEY `name_photocard` (`name_photocard`);

--
-- Index pour la table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `useradmin`
--
ALTER TABLE `useradmin`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `article`
--
ALTER TABLE `article`
  MODIFY `article_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `article_photos`
--
ALTER TABLE `article_photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `categorie`
--
ALTER TABLE `categorie`
  MODIFY `categorie_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `gallery`
--
ALTER TABLE `gallery`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT pour la table `photocard`
--
ALTER TABLE `photocard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT pour la table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `useradmin`
--
ALTER TABLE `useradmin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `article`
--
ALTER TABLE `article`
  ADD CONSTRAINT `article_ibfk_1` FOREIGN KEY (`id_photocard`) REFERENCES `photocard` (`id`),
  ADD CONSTRAINT `article_ibfk_2` FOREIGN KEY (`id_categorie`) REFERENCES `categorie` (`categorie_id`),
  ADD CONSTRAINT `article_ibfk_3` FOREIGN KEY (`id_user_name`) REFERENCES `useradmin` (`id`);

--
-- Contraintes pour la table `article_photos`
--
ALTER TABLE `article_photos`
  ADD CONSTRAINT `article_photos_ibfk_1` FOREIGN KEY (`photos_id`) REFERENCES `photos` (`id`),
  ADD CONSTRAINT `article_photos_ibfk_2` FOREIGN KEY (`article_id`) REFERENCES `article` (`article_id`);

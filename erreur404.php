<?php

$absolute = "http://makoto.dojo.free.fr/" ;

$relatif = $_SERVER['REQUEST_URI'] ;

//echo "relatif : ".$relatif."<br>" ;

$tableau_chemin = split('/',$relatif); // recupere l'arborescence

header("HTTP/1.0 200 OK");

//echo "premier : ".$tableau_chemin[1]."<br>" ;

if ($tableau_chemin[1] == "pc")
  {
    switch ($relatif) {
    case "/pc/ados.html":
      $dest = "index.php" ;
      break ;
    case "/pc/aikido.html":
      $dest = "discipline.html" ;
      break ;
    case "/pc/contact.html":
    case "/pc/horaires.html":
    case "/pc/renseignements.html":
    case "/pc/images/pub-plan.pdf":
      $dest = "pratique.html" ;
    break ;
    case "/pc/initiation.html":
      $dest = "fonctionnement.html" ;
      break ;
    case "/pc/news.html":
      $dest = "actualite.html" ;
      break ;
    case "/pc/professeur.html":
      $dest = "professeur.html" ;
      break ;
    case "/pc/uchi-deshi.html":
      $dest = "uchi.html" ;
      break ;
    default:
      $dest = "index.php" ;
      break ;
    }
  }
else if ($tableau_chemin[1] == "english")
  {
    switch ($relatif) {
    case "/english/ados.html":
      $dest = "index_en.php" ;
      break ;
    case "/english/aikido.html":
      $dest = "discipline_en.html" ;
      break ;
    case "/english/contact.html":
    case "/english/horaires.html":
    case "/english/renseignements.html":
    case "/english/images/pub-plan.pdf":
      $dest = "pratique_en.html" ;
    break ;
    case "/english/initiation.html":
      $dest = "fonctionnement_en.html" ;
      break ;
    case "/english/news.html":
      $dest = "actualite_en.html" ;
      break ;
    case "/english/professeur.html":
      $dest = "professeur_en.html" ;
      break ;
    case "/english/uchi-deshi.html":
      $dest = "uchi_en.html" ;
      break ;
    default:
      $dest = "index_en.php" ;
      break ;
    }
  }
else
  $dest = "index.php" ;


//echo "dest : ".$dest."<br>" ;

header("Status: 301 Moved Permanently", false, 301);
header("Location: ".$absolute."".$dest);
exit();
?>
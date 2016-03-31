console.log("ok");
$(document).ready(function() {
  $('.modal-trigger').leanModal();
  $('.materialboxed').materialbox();
});



var alphabet = angular.module('alphabet', []);
alphabet.controller('alphabetCtrl',
    function alphabetCtrl($scope, $sce){
        $scope.alphabet = [{
                lettre : "a",
                fresque : "img/fresques/FresqueA.jpg",
                poeme : "img/poemes/texteA.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840905&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/NHdk81JtMeA")
            },
            {
                lettre : "b",
                fresque : "img/fresques/FresqueB.jpg",
                poeme : "img/poemes/texteB.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840900&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/19bHlwbVNc4")
            },
            {
                lettre : "c",
                fresque : "img/fresques/FresqueC.jpg",
                poeme : "img/poemes/texteC.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840894&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/dzmfAntd1Ds")
            },
            {
                lettre : "D",
                fresque : "img/fresques/FresqueD.jpg",
                poeme : "img/poemes/texteD.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840887&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/mgxNwi9e3e0")
            },
            {
                lettre : "e",
                fresque : "img/fresques/FresqueE.jpg",
                poeme : "img/poemes/texteE.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840881&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/mu-HFyg8MgM")
            },
            {
                lettre : "f",
                fresque : "img/fresques/FresqueF.jpg",
                poeme : "img/poemes/texteF.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840880&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/rPZlb8iphwc")
            },
            {
                lettre : "g",
                fresque : "img/fresques/FresqueG.jpg",
                poeme : "img/poemes/texteG.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "h",
                fresque : "img/fresques/FresqueH.jpg",
                poeme : "img/poemes/texteH.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "i",
                fresque : "img/fresques/FresqueI.jpg",
                poeme : "img/poemes/texteI.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "j",
                fresque : "img/fresques/FresqueJ.jpg",
                poeme : "img/poemes/texteJ.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "K",
                fresque : "img/fresques/FresqueK.jpg",
                poeme : "img/poemes/texteK.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "L",
                fresque : "img/fresques/FresqueL.jpg",
                poeme : "img/poemes/texteL.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "m",
                fresque : "img/fresques/FresqueM.jpg",
                poeme : "img/poemes/texteM.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "n",
                fresque : "img/fresques/FresqueN.jpg",
                poeme : "img/poemes/texteN.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "o",
                fresque : "img/fresques/FresqueO.jpg",
                poeme : "img/poemes/texteO.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "p",
                fresque : "img/fresques/FresqueP.jpg",
                poeme : "img/poemes/texteP.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "q",
                fresque : "img/fresques/FresqueQ.jpg",
                poeme : "img/poemes/texteQ.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "r",
                fresque : "img/fresques/FresqueR.jpg",
                poeme : "img/poemes/texteR.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "s",
                fresque : "img/fresques/FresqueS.jpg",
                poeme : "img/poemes/texteS.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "t",
                fresque : "img/fresques/FresqueT.jpg",
                poeme : "img/poemes/texteT.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "u",
                fresque : "img/fresques/FresqueU.jpg",
                poeme : "img/poemes/texteU.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "v",
                fresque : "img/fresques/FresqueV.jpg",
                poeme : "img/poemes/texteV.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "w",
                fresque : "img/fresques/FresqueW.jpg",
                poeme : "img/poemes/texteW.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "x",
                fresque : "img/fresques/FresqueX.jpg",
                poeme : "img/poemes/texteX.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "y",
                fresque : "img/fresques/FresqueY.jpg",
                poeme : "img/poemes/texteY.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            },
            {
                lettre : "z",
                fresque : "img/fresques/FresqueZ.jpg",
                poeme : "img/poemes/texteZ.jpg",
                soundcloud : $sce.trustAsResourceUrl("https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/167840879&amp;auto_play=false&amp;hide_related=true&amp;show_comments=false&amp;show_user=false&amp;show_reposts=false&amp;visual=false"),
                video : $sce.trustAsResourceUrl("https://www.youtube.com/embed/xqIfLdFhWqA")
            }
        ];
    });

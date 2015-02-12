'use strict';
// requires
var THREE = require('./three');
var VREffect = require('./VREffect');
var VRControls = require('./VRControls');
var MouseControls = require('./MouseControls');
var CSS3DObject = require('./CSS3DObject');
var TWEEN = require('tween.js');
var globalElement = Array();
var TrackballControls = require('./TrackballControls');

console.log('hello');
var myJson = 
{
  "collection1": [
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/samantha_albert.jpg"
      },
      "name": "Samantha Albert"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/josh_aurebach.jpg"
      },
      "name": "Josh Auerbach"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/alex_bedder.jpg"
      },
      "name": "Alex Bedder"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/kate_bell.jpeg"
      },
      "name": "Kate Bell"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/xavier_bessez.png"
      },
      "name": "Xavier Bessez"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/ralph_bishop.jpg"
      },
      "name": "Ralph Bishop"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/brian_bonz.jpg"
      },
      "name": "Brian Bonz"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/john_borthwick.jpg"
      },
      "name": "John Borthwick"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/margot_boyer-dry.jpeg"
      },
      "name": "Margot Boyer-Dry"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/dominic_butchello.jpeg"
      },
      "name": "Dom Butchello"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/christian_calderon.png"
      },
      "name": "Christian Calderon"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/dan_carlberg.jpeg"
      },
      "name": "Dan Carlberg"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/cassie_cb.jpg"
      },
      "name": "Cassie Cb"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/frankie_cheung.jpeg"
      },
      "name": "Frankie Cheung"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/jon-chin.jpg"
      },
      "name": "Jonathan Chin"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/paul_christophe.jpeg"
      },
      "name": "paul christophe"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/alex_chung.jpg"
      },
      "name": "Alex Chung"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/alex_companioni.jpg"
      },
      "name": "Alex Companioni"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/james_cooper.jpg"
      },
      "name": "James Cooper"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/veronica_desouza.jpeg"
      },
      "name": "Veronica de Souza"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/chris_deaner.jpeg"
      },
      "name": "Chris Deaner"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/suman_deb roy.jpeg"
      },
      "name": "Suman Deb Roy"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/nicholas_disanto.jpg"
      },
      "name": "Nick DiSanto"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/brian_donohue.jpeg"
      },
      "name": "Brian Donohue"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/eric_doty.jpg"
      },
      "name": "Eric Doty"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/anna_dubenko.jpeg"
      },
      "name": "Anna Dubenko"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/andrew_dumont.jpeg"
      },
      "name": "Andrew Dumont"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/emily_erardy.jpg"
      },
      "name": "Emily Erardy"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/patrick_estabrook.jpg"
      },
      "name": "Patrick Estabrook"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/james_fallisgaard.jpeg"
      },
      "name": "James Fallisgaard"
    },
    {
      "img": {
        "text": "",
        "src": "http://static.digg.com/static/fe/ec9f50/images/about/danfallon.jpg"
      },
      "name": "Dan Fallon"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/jon_ferrer.jpeg"
      },
      "name": "Jon Ferrer"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/dan_finkler.jpeg"
      },
      "name": "Dan Finkler"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/toby_fox.jpg"
      },
      "name": "Toby Fox"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/adam_fraser.jpg"
      },
      "name": "Adam Fraser"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/mike-friedman.jpg"
      },
      "name": "Mike Friedman"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/kelly_gallozzi.jpeg"
      },
      "name": "Kelly Gallozzi"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/jess_gilliam.jpeg"
      },
      "name": "Jess Gilliam"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/erin_glenn.jpg"
      },
      "name": "Erin Glenn"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/eric-glover.jpg"
      },
      "name": "Eric Glover"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/alan_grow.jpeg"
      },
      "name": "Alan Grow"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/rodion_gusev.jpg"
      },
      "name": "Rodion Gusev"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/paul_handly.png"
      },
      "name": "Paul Handly"
    },
    {
      "img": {
        "text": "",
        "src": "https://scontent-b-lga.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10579989_10101349024500887_11909397523325932_n.jpg?oh=df818bac0cacc0ad5a2ad1775faf4363&oe=556BE83D"
      },
      "name": "Matthew Hartman"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/nick_hasty.jpeg"
      },
      "name": "Nick Hasty"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/tony-he.JPG"
      },
      "name": "Tony He"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/dave-hill.png"
      },
      "name": "Dave Hill"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/david_hohusen.jpeg"
      },
      "name": "David Hohusen"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/jak_horner.jpeg"
      },
      "name": "Jak Horner"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/kris_horowitz.jpeg"
      },
      "name": "Kris Horowitz"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/kuan_huang.jpg"
      },
      "name": "Kuan Huang"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/rebekah_huber.gif"
      },
      "name": "Rebekah Huber"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/brandi_hudson.png"
      },
      "name": "Brandi Hudson"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/matt-hudson.jpg"
      },
      "name": "Matt Hudson"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/daniel_ilkovich.jpg"
      },
      "name": "Daniel Ilkovich"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/frank_jania.jpg"
      },
      "name": "Frank Jania"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/aaron_kapor.jpeg"
      },
      "name": "Aaron Kapor"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/andy_kelley.jpeg"
      },
      "name": "Andy Kelley"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/saskia_keultjes.jpg"
      },
      "name": "Saskia Keultjes"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/nathaniel_kirby.png"
      },
      "name": "Nate Kirby"
    },
    {
      "img": {
        "text": "",
        "src": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/000/2b7/133/03e9845.jpg"
      },
      "name": "Allie Kokesh"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/alex_kolundzija.jpeg"
      },
      "name": "Alex Kolundzija"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/drew_kramer.jpeg"
      },
      "name": "Drew Kramer"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/benjamin-krasnow.JPG"
      },
      "name": "Benjamin Krasnow"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/johan_kristensson.jpeg"
      },
      "name": "Johan Kristensson"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/thea_lammers.jpeg"
      },
      "name": "Thea Lammers"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/matt_langer.jpeg"
      },
      "name": "Matt Langer"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/jayne_lee.jpg"
      },
      "name": "Jayne Lee"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/kamiu_lee.jpeg"
      },
      "name": "Kamiu Lee"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/adam_leibsohn.jpg"
      },
      "name": "Adam Leibsohn"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/greg_leuch.jpeg"
      },
      "name": "Greg Leuch"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/draco_li.jpeg"
      },
      "name": "Draco Li"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/jorge_lopez.jpeg"
      },
      "name": "Jorge Lopez"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/gilad_lotan.jpeg"
      },
      "name": "Gilad Lotan"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/tim_luckow.jpg"
      },
      "name": "Tim Luckow"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/ariel_magnes.jpeg"
      },
      "name": "Ariel M"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/sam-mandel.jpg"
      },
      "name": "Sam Mandel"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/joy_marcus.jpg"
      },
      "name": "Joy Marcus"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/andrew_mclaughlin.jpeg"
      },
      "name": "Andrew McLaughlin"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/bryan_menegus.jpg"
      },
      "name": "Bryan Menegus"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/tyler_menzel.jpeg"
      },
      "name": "Tyler Menzel"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/catherine-miller.jpg"
      },
      "name": "Catherine Miller"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/patrick_moberg.jpeg"
      },
      "name": "Patrick Moberg"
    },
    {
      "img": {
        "text": "",
        "src": "https://media.licdn.com/media/p/4/005/027/0d3/2f46864.jpg"
      },
      "name": "Michelle Monteleone"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/christian_montoya.jpg"
      },
      "name": "Christian Montoya"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/paul_murphy.jpg"
      },
      "name": "Paul Murphy"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/maan_najjar.jpeg"
      },
      "name": "Maan Najjar"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/igal_nassima.jpg"
      },
      "name": "Igal Nassima"
    },
    {
      "img": {
        "text": "",
        "src": "http://i.imgur.com/AA6VWVu.jpg"
      },
      "name": "Nam Nguyen"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/sissi_nie.jpg"
      },
      "name": "Sissi Nie"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/john_o'neill.jpg"
      },
      "name": "John O'Neill"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/sandro_pasquali.jpg"
      },
      "name": "Sandro Pasquali"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/lauren_piazza koester.jpg"
      },
      "name": "Lauren Piazza Koester"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/maya_prohovnik.jpg"
      },
      "name": "Maya Prohovnik"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/tyler_raftery.jpeg"
      },
      "name": "Tyler Raftery"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/jeff_rand.jpeg"
      },
      "name": "Jeff Rand"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/patrik_ring.jpeg"
      },
      "name": "Patrik Ring"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/margaret_robertson.jpeg"
      },
      "name": "Margaret Robertson"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/christian_rocha.jpg"
      },
      "name": "Christian Rocha"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/steve_rousseau.jpeg"
      },
      "name": "Steve Rousseau"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/michael_rubino.jpg"
      },
      "name": "Michael Rubino"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/steve_sadin.jpeg"
      },
      "name": "Steven Sadin"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/toby_sarnelle.jpg"
      },
      "name": "Toby Sarnelle"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/lauren_shuster.jpeg"
      },
      "name": "Lauren Shuster"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/chris_sira.png"
      },
      "name": "Christopher Sira"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/rob_spychala.jpeg"
      },
      "name": "Rob Spychala"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/dan_steadmen.jpg"
      },
      "name": "Dan Steadman"
    },
    {
      "img": {
        "text": "",
        "src": "https://dl.dropboxusercontent.com/u/29774006/digg_headshot.jpeg"
      },
      "name": "Shivram Subramanian"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/mattias_swenson.jpeg"
      },
      "name": "Mattias Swenson"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/joe_tonelli.jpeg"
      },
      "name": "Joe Tonelli"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/corin-trachtman.jpg"
      },
      "name": "Corin Trachtman"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/cody-uhler.JPG"
      },
      "name": "Cody Uhler"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/justin_van slembrouck.jpeg"
      },
      "name": "Justin Van Slembrouck"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/tiffany_vasquez.jpeg"
      },
      "name": "Tiffany Vazquez"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/andrea_wagner.png"
      },
      "name": "Andrea Wagner"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/ryan_wang.jpeg"
      },
      "name": "Ryan Wang"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/ross-wariner.jpg"
      },
      "name": "Ross Wariner"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/geoffrey_weg.png"
      },
      "name": "Geoffrey Weg"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/david_weiner.jpeg"
      },
      "name": "Dave Weiner"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/mike_young.jpg"
      },
      "name": "Michael Young"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/draco_li.jpeg"
      },
      "name": "Brad Zeff"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/lisa_zhang.jpg"
      },
      "name": "Lisa Zhang"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/romy_zipken.jpeg"
      },
      "name": "Romy Zipken"
    },
    {
      "img": {
        "text": "",
        "src": "https://s3.amazonaws.com/backstage-assets/people/ksusha_zito.jpeg"
      },
      "name": "Kseniya Zito"
    }
  ]
}
var table = [
	"employee", "one", "https://s3.amazonaws.com/backstage-assets/people/josh_aurebach.jpg", 1, 1,
	"He", "Helium", "4.002602", 18, 1,
	"Li", "Lithium", "6.941", 1, 2,
	"Be", "Beryllium", "9.012182", 2, 2,
	"B", "Boron", "10.811", 13, 2,
	"C", "Carbon", "12.0107", 14, 2,
	"N", "Nitrogen", "14.0067", 15, 2,
	"O", "Oxygen", "15.9994", 16, 2,
	"F", "Fluorine", "18.9984032", 17, 2,
	"Ne", "Neon", "20.1797", 18, 2,
	"Na", "Sodium", "22.98976...", 1, 3,
	"Mg", "Magnesium", "24.305", 2, 3,
	"Al", "Aluminium", "26.9815386", 13, 3,
	"Si", "Silicon", "28.0855", 14, 3,
	"P", "Phosphorus", "30.973762", 15, 3,
	"S", "Sulfur", "32.065", 16, 3,
	"Cl", "Chlorine", "35.453", 17, 3,
	"Ar", "Argon", "39.948", 18, 3,
	"K", "Potassium", "39.948", 1, 4,
	"Ca", "Calcium", "40.078", 2, 4,
	"Sc", "Scandium", "44.955912", 3, 4,
	"Ti", "Titanium", "47.867", 4, 4,
	"V", "Vanadium", "50.9415", 5, 4,
	"Cr", "Chromium", "51.9961", 6, 4,
	"Mn", "Manganese", "54.938045", 7, 4,
	"Fe", "Iron", "55.845", 8, 4,
	"Co", "Cobalt", "58.933195", 9, 4,
	"Ni", "Nickel", "58.6934", 10, 4,
	"Cu", "Copper", "63.546", 11, 4,
	"Zn", "Zinc", "65.38", 12, 4,
	"Ga", "Gallium", "69.723", 13, 4,
	"Ge", "Germanium", "72.63", 14, 4,
	"As", "Arsenic", "74.9216", 15, 4,
	"Se", "Selenium", "78.96", 16, 4,
	"Br", "Bromine", "79.904", 17, 4,
	"Kr", "Krypton", "83.798", 18, 4,
	"Rb", "Rubidium", "85.4678", 1, 5,
	"Sr", "Strontium", "87.62", 2, 5,
	"Y", "Yttrium", "88.90585", 3, 5,
	"Zr", "Zirconium", "91.224", 4, 5,
	"Nb", "Niobium", "92.90628", 5, 5,
	"Mo", "Molybdenum", "95.96", 6, 5,
	"Tc", "Technetium", "(98)", 7, 5,
	"Ru", "Ruthenium", "101.07", 8, 5,
	"Rh", "Rhodium", "102.9055", 9, 5,
	"Pd", "Palladium", "106.42", 10, 5,
	"Ag", "Silver", "107.8682", 11, 5,
	"Cd", "Cadmium", "112.411", 12, 5,
	"In", "Indium", "114.818", 13, 5,
	"Sn", "Tin", "118.71", 14, 5,
	"Sb", "Antimony", "121.76", 15, 5,
	"Te", "Tellurium", "127.6", 16, 5,
	"I", "Iodine", "126.90447", 17, 5,
	"Xe", "Xenon", "131.293", 18, 5,
	"Cs", "Caesium", "132.9054", 1, 6,
	"Ba", "Barium", "132.9054", 2, 6,
	"La", "Lanthanum", "138.90547", 4, 9,
	"Ce", "Cerium", "140.116", 5, 9,
	"Pr", "Praseodymium", "140.90765", 6, 9,
	"Nd", "Neodymium", "144.242", 7, 9,
	"Pm", "Promethium", "(145)", 8, 9,
	"Sm", "Samarium", "150.36", 9, 9,
	"Eu", "Europium", "151.964", 10, 9,
	"Gd", "Gadolinium", "157.25", 11, 9,
	"Tb", "Terbium", "158.92535", 12, 9,
	"Dy", "Dysprosium", "162.5", 13, 9,
	"Ho", "Holmium", "164.93032", 14, 9,
	"Er", "Erbium", "167.259", 15, 9,
	"Tm", "Thulium", "168.93421", 16, 9,
	"Yb", "Ytterbium", "173.054", 17, 9,
	"Lu", "Lutetium", "174.9668", 18, 9,
	"Hf", "Hafnium", "178.49", 4, 6,
	"Ta", "Tantalum", "180.94788", 5, 6,
	"W", "Tungsten", "183.84", 6, 6,
	"Re", "Rhenium", "186.207", 7, 6,
	"Os", "Osmium", "190.23", 8, 6,
	"Ir", "Iridium", "192.217", 9, 6,
	"Pt", "Platinum", "195.084", 10, 6,
	"Au", "Gold", "196.966569", 11, 6,
	"Hg", "Mercury", "200.59", 12, 6,
	"Tl", "Thallium", "204.3833", 13, 6,
	"Pb", "Lead", "207.2", 14, 6,
	"Bi", "Bismuth", "208.9804", 15, 6,
	"Po", "Polonium", "(209)", 16, 6,
	"At", "Astatine", "(210)", 17, 6,
	"Rn", "Radon", "(222)", 18, 6,
	"Fr", "Francium", "(223)", 1, 7,
	"Ra", "Radium", "(226)", 2, 7,
	"Ac", "Actinium", "(227)", 4, 10,
	"Th", "Thorium", "232.03806", 5, 10,
	"Pa", "Protactinium", "231.0588", 6, 10,
	"U", "Uranium", "238.02891", 7, 10,
	"Np", "Neptunium", "(237)", 8, 10,
	"Pu", "Plutonium", "(244)", 9, 10,
	"Am", "Americium", "(243)", 10, 10,
	"Cm", "Curium", "(247)", 11, 10,
	"Bk", "Berkelium", "(247)", 12, 10,
	"Cf", "Californium", "(251)", 13, 10,
	"Es", "Einstenium", "(252)", 14, 10,
	"Fm", "Fermium", "(257)", 15, 10,
	"Md", "Mendelevium", "(258)", 16, 10,
	"No", "Nobelium", "(259)", 17, 10,
	"Lr", "Lawrencium", "(262)", 18, 10,
	"Rf", "Rutherfordium", "(267)", 4, 7,
	"Db", "Dubnium", "(268)", 5, 7,
	"Sg", "Seaborgium", "(271)", 6, 7,
	"Bh", "Bohrium", "(272)", 7, 7,
	"Hs", "Hassium", "(270)", 8, 7,
	"Mt", "Meitnerium", "(276)", 9, 7,
	"Ds", "Darmstadium", "(281)", 10, 7,
	"Rg", "Roentgenium", "(280)", 11, 7,
	"Cn", "Copernicium", "(285)", 12, 7,
	"Uut", "Unutrium", "(284)", 13, 7,
	"Fl", "Flerovium", "(289)", 14, 7,
	"Uup", "Ununpentium", "(288)", 15, 7,
	"Lv", "Livermorium", "(293)", 16, 7,
	"Uus", "Ununseptium", "(294)", 17, 7,
	"Uuo", "Ununoctium", "(294)", 18, 7
];

var camera, scene, renderer;
var controls;

var state = 0;

var objects = [];
var targets = { table: [], sphere: [], helix: [], grid: [] };

function init() {

	camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = 3000;

	scene = new THREE.Scene();

	// define the table
	for ( var i = 0; i < myJson.collection1.length; i++ ) {

		var element = document.createElement( 'div' );
		element.className = 'element';
		//element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
		//element.style.background = "url('" + employees[i]["img"] + "') ";

		var symbol = document.createElement( 'div' );
		symbol.className = 'symbol';
		symbol.innerHTML = "<img src='" + myJson.collection1[i].img.src + "' width=200>";
		element.appendChild( symbol );

		globalElement[i] = element;

		var object = new CSS3DObject( element );
		object.position.x = Math.random() * 4000 - 2000;
		object.position.y = Math.random() * 4000 - 2000;
		object.position.z = Math.random() * 4000 - 2000;
		scene.add( object );
		
		objects.push( object );

		//

		var object = new THREE.Object3D();
		object.position.x = ( table[ i + 3 ] * 140 ) - 1330;
		object.position.y = - ( table[ i + 4 ] * 180 ) + 990;

		targets.table.push( object );

	}

	// sphere

	var vector = new THREE.Vector3();

	for ( var i = 0, l = objects.length; i < l; i ++ ) {

		var phi = Math.acos( -1 + ( 2 * i ) / l );
		var theta = Math.sqrt( l * Math.PI ) * phi;

		var object = new THREE.Object3D();

		object.position.x = 800 * Math.cos( theta ) * Math.sin( phi );
		object.position.y = 800 * Math.sin( theta ) * Math.sin( phi );
		object.position.z = 800 * Math.cos( phi );

		vector.copy( object.position ).multiplyScalar( 2 );

		object.lookAt( vector );

		targets.sphere.push( object );

	}

	// helix
	
	var vector = new THREE.Vector3();

	for ( var i = 0, l = objects.length; i < l; i ++ ) {

		var phi = i * 0.175 + Math.PI;

		var object = new THREE.Object3D();

		object.position.x = 900 * Math.sin( phi );
		object.position.y = - ( i * 8 ) + 450;
		object.position.z = 900 * Math.cos( phi );

		vector.x = object.position.x * 2;
		vector.y = object.position.y;
		vector.z = object.position.z * 2;

		object.lookAt( vector );

		targets.helix.push( object );

	}
	
	// grid
	
	for ( var i = 0; i < objects.length; i ++ ) {

		var object = new THREE.Object3D();

		object.position.x = ( ( i % 5 ) * 400 ) - 800;
		object.position.y = ( - ( Math.floor( i / 5 ) % 5 ) * 400 ) + 800;
		object.position.z = ( Math.floor( i / 25 ) ) * 1000 - 2000;

		targets.grid.push( object );

	}

	//

	renderer = new THREE.CSS3DStereoRenderer();
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.domElement.style.position = 'absolute';
	document.getElementById( 'container' ).appendChild( renderer.domElement );

	//

	controls = new THREE.TrackballControls( camera, renderer.domElement );
	controls.rotateSpeed = 0.5;
	controls.minDistance = 500;
	controls.maxDistance = 6000;
	controls.addEventListener( 'change', render );

	//transform( targets.table, 5000 );
	transform( targets.helix, 5000 );

	//

	window.addEventListener( 'resize', onWindowResize, false );

}

//

var isFullscreen = false;

window.addEventListener( 'touchend', function () {

	if ( isFullscreen === false ) {

		document.body.webkitRequestFullscreen();

		isFullscreen = true;

	} else {
	
		document.webkitExitFullscreen();
		
		isFullscreen = false;
	
	}

} );

function transform( positions, duration ) {
	
	TWEEN.removeAll();
	
	for ( var i = 0; i < objects.length; i ++ ) {

		var object = objects[ i ];
		var target = positions[ i ];

		new TWEEN.Tween( object.position )
			.to( { x: target.position.x, y: target.position.y, z: target.position.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();
	
		new TWEEN.Tween( object.rotation )
			.to( { x: target.rotation.x, y: target.rotation.y, z: target.rotation.z }, Math.random() * duration + duration )
			.easing( TWEEN.Easing.Exponential.InOut )
			.start();
		
	
	}
	
	new TWEEN.Tween( this )
		.to( {}, duration * 2 )
		.onUpdate( render )
		.onComplete( function () {

			/*
			switch ( state ) {
				case 0:
					//transform( targets.sphere, 2000 );
					//break;
				case 1:
					transform( targets.helix, 2000 );
					break;
				case 2:
					//transform( targets.grid, 2000 );
					//break;
				case 3:
					//transform( targets.table, 2000 );
					//break;
			}
			*/
			//transform( targets.sphere, 2000 );
			/*
			state = state + 1;

			if ( state ==3 ) state = 1;
			*/
		})
		.start();

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

	render();

}

function animate() {

	requestAnimationFrame( animate );
	
	TWEEN.update();

	controls.update();

}

function render() {

	renderer.render( scene, camera );

}

module.exports = {
	init: init,
	animate: animate,
	scene: scene,
	camera: camera
}
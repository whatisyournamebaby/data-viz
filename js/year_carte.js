$( document ).ready(function() {



$(function () {
    Highcharts.setOptions({
        lang: {
            numericSymbols: ['k', ' millions', ' milliards', ' billions']
        }
    });



    // autocomplete
    $('input.autocomplete').autocomplete({
        data: {
            "Adrien": null,
            "Agnès": null,
            "Alain": null,
            "Alexandra": null,
            "Alexandre": null,
            "Alice": null,
            "Amandine": null,
            "Amélie": null,
            "Anaïs": null,
            "Angelique": null,
            "Anne": null,
            "Annick": null,
            "Annie": null,
            "Anthony": null,
            "Antoine": null,
            "Arnaud": null,
            "Arthur": null,
            "Audrey": null,
            "Aurélie": null,
            "Aurélien": null,
            "Aurore": null,
            "Baptiste": null,
            "Béatrice": null,
            "Benjamin": null,
            "Benoît": null,
            "Bernard": null,
            "Brigitte": null,
            "Bruno": null,
            "Camille": null,
            "Carole": null,
            "Caroline": null,
            "Catherine": null,
            "Cécile": null,
            "Cedric": null,
            "Céline": null,
            "Chantal": null,
            "Charlotte": null,
            "Chloé": null,
            "Christelle": null,
            "Christian": null,
            "Christiane": null,
            "Christine": null,
            "Christophe": null,
            "Cindy": null,
            "Claire": null,
            "Clara": null,
            "Claudine": null,
            "Clément": null,
            "Corinne": null,
            "Cyril": null,
            "Damien": null,
            "Daniel": null,
            "David": null,
            "Delphine": null,
            "Denis": null,
            "Didier": null,
            "Dominique": null,
            "Dylan": null,
            "Elisabeth": null,
            "Elise": null,
            "Elodie": null,
            "Emilie": null,
            "Emma": null,
            "Emmanuel": null,
            "Emmanuelle": null,
            "Enzo": null,
            "Eric": null,
            "Estelle": null,
            "Eva": null,
            "Evelyne": null,
            "Fabien": null,
            "Fabienne": null,
            "Fanny": null,
            "Florence": null,
            "Florent": null,
            "Florian": null,
            "Francis": null,
            "Franck": null,
            "François": null,
            "Françoise": null,
            "Frédéric": null,
            "Gabriel": null,
            "Gilles": null,
            "Gregory": null,
            "Guillaume": null,
            "Hélène": null,
            "Hervé": null,
            "Hugo": null,
            "Inès": null,
            "Isabelle": null,
            "Jacqueline": null,
            "Jacques": null,
            "Jade": null,
            "Jean": null,
            "Jean-claude": null,
            "Jean-françois": null,
            "Jean-luc": null,
            "Jean-marc": null,
            "Jean-michel": null,
            "Jean-paul": null,
            "Jean-pierre": null,
            "Jennifer": null,
            "Jeremy": null,
            "Jerome": null,
            "Jessica": null,
            "Jocelyne": null,
            "Joël": null,
            "Joëlle": null,
            "Jonathan": null,
            "Jules": null,
            "Julie": null,
            "Julien": null,
            "Juliette": null,
            "Justine": null,
            "Karine": null,
            "Kevin": null,
            "Laetitia": null,
            "Laura": null,
            "Laure": null,
            "Laurence": null,
            "Laurent": null,
            "Léa": null,
            "Lionel": null,
            "Lisa": null,
            "Loïc": null,
            "Louis": null,
            "Louise": null,
            "Lucas": null,
            "Lucie": null,
            "Ludovic": null,
            "Magali": null,
            "Manon": null,
            "Marc": null,
            "Marie": null,
            "Marie-christine": null,
            "Marine": null,
            "Marion": null,
            "Martine": null,
            "Mathieu": null,
            "Mathilde": null,
            "Mathis": null,
            "Matthieu": null,
            "Mélanie": null,
            "Mélissa": null,
            "Michael": null,
            "Michel": null,
            "Michèle": null,
            "Mickael": null,
            "Mohamed": null,
            "Monique": null,
            "Morgane": null,
            "Muriel": null,
            "Myriam": null,
            "Nadia": null,
            "Nadine": null,
            "Nathalie": null,
            "Nathan": null,
            "Nicolas": null,
            "Nicole": null,
            "Océane": null,
            "Olivier": null,
            "Pascal": null,
            "Pascale": null,
            "Patricia": null,
            "Patrick": null,
            "Paul": null,
            "Pauline": null,
            "Philippe": null,
            "Pierre": null,
            "Quentin": null,
            "Raphaël": null,
            "Rémi": null,
            "Romain": null,
            "Sabrina": null,
            "Samuel": null,
            "Sandra": null,
            "Sandrine": null,
            "Sarah": null,
            "Sébastien": null,
            "Severine": null,
            "Simon": null,
            "Sonia": null,
            "Sophie": null,
            "Stéphanie": null,
            "Sylvain": null,
            "Sylvie": null,
            "Théo": null,
            "Thierry": null,
            "Thomas": null,
            "Tom": null,
            "Valentin": null,
            "Valérie": null,
            "Vanessa": null,
            "Véronique": null,
            "Victor": null,
            "Vincent": null,
            "Virginie": null,
            "William": null,
            "Xavier": null,
            "Yann": null
        },
        limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    });



    // Make sure that the dropdown is loaded correctly
    $('select').material_select();


    // Initiate the years map

    $('#CarteFranceTopPrenom').highcharts('Map', {
        title: {
            text: 'Sélectionnez une année'
        },

        subtitle: {
            text: 'depuis le menu déroulant ci-dessus'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        exporting: {
            buttons: {
                contextButton: {
                    symbolStroke: '#1893B2',
                },
            },
        },

        colorAxis: {
            minColor: "#AD1457",
            maxColor: "#FCE4EC",
            min: 1,
            max: 50
        },

        plotOptions: {
            map: {
                allAreas: false,
                joinBy: ['iso-a2', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    formatter: function () {
                        if (this.point.properties && this.point.properties.labelrank.toString() < 5) {
                            return this.point.properties['iso-a2'];
                        }
                    },
                    format: null,
                    style: {
                        fontWeight: 'bold'
                    }
                },
                mapData: Highcharts.maps['countries/fr/custom/fr-all-mainland'],
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<b>{point.name}</b>' + '<br>' +
                    'Nombre total de naissances : ' + '{point.nbNaissances}' + '<br>' +
                    'Pourcentage de ' + '{point.nom}' + ' : ' + '{point.pourcentageMax }' + '<br>'
                }

            }
        },



        series: [

            {
                data: data2015,
                mapData: Highcharts.maps['countries/fr/custom/fr-all-mainland'],
                joinBy: 'hc-key',
                /* couleur du surlignage*/

                states: {
                    hover: {
                        color: '#a4edba'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.nom}'
                }
            }
        ],
        /* pas de légende*/
        legend: {
            enabled: false
        }
    });

    // Switch the year from the dropdown
    $('#year-select').change(function () {
        var chart = $('#CarteFranceTopPrenom').highcharts();
        var val = $('#year-select').val();
        switch (val) {
            case "2015":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2015" }, { text: "" });
                chart.series[0].setData(data2015);
                break;
            case "2014":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2014" }, { text: "" });
                chart.series[0].setData(data2014);
                break;
            case "2013":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2013" }, { text: "" });
                chart.series[0].setData(data2013);
                break;
            case "2012":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2012" }, { text: "" });
                chart.series[0].setData(data2012);
                break;
            case "2011":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2011" }, { text: "" });
                chart.series[0].setData(data2011);
                break;
            case "2010":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2010" }, { text: "" });
                chart.series[0].setData(data2010);
                break;
            case "2009":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2009" }, { text: "" });
                chart.series[0].setData(data2009);
                break;
            case "2008":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2008" }, { text: "" });
                chart.series[0].setData(data2008);
                break;
            case "2007":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2007" }, { text: "" });
                chart.series[0].setData(data2007);
                break;
            case "2006":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2006" }, { text: "" });
                chart.series[0].setData(data2006);
                break;
            case "2005":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2005" }, { text: "" });
                chart.series[0].setData(data2005);
                break;
            case "2004":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2004" }, { text: "" });
                chart.series[0].setData(data2004);
                break;
            case "2003":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2003" }, { text: "" });
                chart.series[0].setData(data2003);
                break;
            case "2002":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2002" }, { text: "" });
                chart.series[0].setData(data2002);
                break;
            case "2001":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2001" }, { text: "" });
                chart.series[0].setData(data2001);
                break;
            case "2000":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2000" }, { text: "" });
                chart.series[0].setData(data2000);
                break;
            case "1999":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1999" }, { text: "" });
                chart.series[0].setData(data1999);
                break;
            case "1998":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1998" }, { text: "" });
                chart.series[0].setData(data1998);
                break;
            case "1997":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1997" }, { text: "" });
                chart.series[0].setData(data1997);
                break;
            case "1996":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1996" }, { text: "" });
                chart.series[0].setData(data1996);
                break;
            case "1995":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1995" }, { text: "" });
                chart.series[0].setData(data1995);
                break;
            case "1994":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1994" }, { text: "" });
                chart.series[0].setData(data1994);
                break;
            case "1993":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1993" }, { text: "" });
                chart.series[0].setData(data1993);
                break;
            case "1992":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1992" }, { text: "" });
                chart.series[0].setData(data1992);
                break;
            case "1991":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1991" }, { text: "" });
                chart.series[0].setData(data1991);
                break;
            case "1990":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1990" }, { text: "" });
                chart.series[0].setData(data1990);
                break;
            case "1989":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1989" }, { text: "" });
                chart.series[0].setData(data1989);
                break;
            case "1988":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1988" }, { text: "" });
                chart.series[0].setData(data1988);
                break;
            case "1987":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1987" }, { text: "" });
                chart.series[0].setData(data1987);
                break;
            case "1986":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1986" }, { text: "" });
                chart.series[0].setData(data1986);
                break;
            case "1985":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1985" }, { text: "" });
                chart.series[0].setData(data1985);
                break;
            case "1984":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1984" }, { text: "" });
                chart.series[0].setData(data1984);
                break;
            case "1983":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1983" }, { text: "" });
                chart.series[0].setData(data1983);
                break;
            case "1982":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1982" }, { text: "" });
                chart.series[0].setData(data1982);
                break;
            case "1981":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1981" }, { text: "" });
                chart.series[0].setData(data1981);
                break;
            case "1980":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1980" }, { text: "" });
                chart.series[0].setData(data1980);
                break;
            case "1979":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1979" }, { text: "" });
                chart.series[0].setData(data1979);
                break;
            case "1978":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1978" }, { text: "" });
                chart.series[0].setData(data1978);
                break;
            case "1977":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1977" }, { text: "" });
                chart.series[0].setData(data1977);
                break;
            case "1976":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1976" }, { text: "" });
                chart.series[0].setData(data1976);
                break;
            case "1975":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1975" }, { text: "" });
                chart.series[0].setData(data1975);
                break;
            case "1974":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1974" }, { text: "" });
                chart.series[0].setData(data1974);
                break;
            case "1973":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1973" }, { text: "" });
                chart.series[0].setData(data1973);
                break;
            case "1972":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1972" }, { text: "" });
                chart.series[0].setData(data1972);
                break;
            case "1971":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1971" }, { text: "" });
                chart.series[0].setData(data1971);
                break;
            case "1970":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1970" }, { text: "" });
                chart.series[0].setData(data1970);
                break;
            case "1969":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1969" }, { text: "" });
                chart.series[0].setData(data1969);
                break;
            case "1968":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1968" }, { text: "" });
                chart.series[0].setData(data1968);
                break;
            case "1967":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1967" }, { text: "" });
                chart.series[0].setData(data1967);
                break;
            case "1966":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1966" }, { text: "" });
                chart.series[0].setData(data1966);
                break;
            case "1965":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1965" }, { text: "" });
                chart.series[0].setData(data1965);
                break;
            case "1964":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1964" }, { text: "" });
                chart.series[0].setData(data1964);
                break;
            case "1963":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1963" }, { text: "" });
                chart.series[0].setData(data1963);
                break;
            case "1962":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1962" }, { text: "" });
                chart.series[0].setData(data1962);
                break;
            case "1961":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1961" }, { text: "" });
                chart.series[0].setData(data1961);
                break;
            case "1960":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1960" }, { text: "" });
                chart.series[0].setData(data1960);
                break;
            case "1959":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1959" }, { text: "" });
                chart.series[0].setData(data1959);
                break;
            case "1958":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1958" }, { text: "" });
                chart.series[0].setData(data1958);
                break;
            case "1957":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1957" }, { text: "" });
                chart.series[0].setData(data1957);
                break;
            case "1956":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1956" }, { text: "" });
                chart.series[0].setData(data1956);
                break;
            case "1955":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1955" }, { text: "" });
                chart.series[0].setData(data1955);
                break;
            case "1954":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1954" }, { text: "" });
                chart.series[0].setData(data1954);
                break;
            case "1953":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1953" }, { text: "" });
                chart.series[0].setData(data1953);
                break;
            case "1952":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1952" }, { text: "" });
                chart.series[0].setData(data1952);
                break;
            case "1951":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1951" }, { text: "" });
                chart.series[0].setData(data1951);
                break;
            case "1950":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1950" }, { text: "" });
                chart.series[0].setData(data1950);
                break;
            case "1949":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1949" }, { text: "" });
                chart.series[0].setData(data1949);
                break;
            case "1948":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1948" }, { text: "" });
                chart.series[0].setData(data1948);
                break;
            case "1947":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1947" }, { text: "" });
                chart.series[0].setData(data1947);
                break;
            case "1946":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1946" }, { text: "" });
                chart.series[0].setData(data1946);
                break;
            case "1945":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1945" }, { text: "" });
                chart.series[0].setData(data1945);
                break;
            case "1944":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1944" }, { text: "" });
                chart.series[0].setData(data1944);
                break;
            case "1943":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1943" }, { text: "" });
                chart.series[0].setData(data1943);
                break;
            case "1942":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1942" }, { text: "" });
                chart.series[0].setData(data1942);
                break;
            case "1941":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1941" }, { text: "" });
                chart.series[0].setData(data1941);
                break;
            case "1940":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1940" }, { text: "" });
                chart.series[0].setData(data1940);
                break;
            case "1939":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1939" }, { text: "" });
                chart.series[0].setData(data1939);
                break;
            case "1938":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1938" }, { text: "" });
                chart.series[0].setData(data1938);
                break;
            case "1937":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1937" }, { text: "" });
                chart.series[0].setData(data1937);
                break;
            case "1936":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1936" }, { text: "" });
                chart.series[0].setData(data1936);
                break;
            case "1935":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1935" }, { text: "" });
                chart.series[0].setData(data1935);
                break;
            case "1934":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1934" }, { text: "" });
                chart.series[0].setData(data1934);
                break;
            case "1933":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1933" }, { text: "" });
                chart.series[0].setData(data1933);
                break;
            case "1932":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1932" }, { text: "" });
                chart.series[0].setData(data1932);
                break;
            case "1931":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1931" }, { text: "" });
                chart.series[0].setData(data1931);
                break;
            case "1930":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1930" }, { text: "" });
                chart.series[0].setData(data1930);
                break;
            case "1929":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1929" }, { text: "" });
                chart.series[0].setData(data1929);
                break;
            case "1928":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1928" }, { text: "" });
                chart.series[0].setData(data1928);
                break;
            case "1927":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1927" }, { text: "" });
                chart.series[0].setData(data1927);
                break;
            case "1926":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1926" }, { text: "" });
                chart.series[0].setData(data1926);
                break;
            case "1925":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1925" }, { text: "" });
                chart.series[0].setData(data1925);
                break;
            case "1924":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1924" }, { text: "" });
                chart.series[0].setData(data1924);
                break;
            case "1923":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1923" }, { text: "" });
                chart.series[0].setData(data1923);
                break;
            case "1922":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1922" }, { text: "" });
                chart.series[0].setData(data1922);
                break;
            case "1921":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1921" }, { text: "" });
                chart.series[0].setData(data1921);
                break;
            case "1920":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1920" }, { text: "" });
                chart.series[0].setData(data1920);
                break;
            case "1919":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1919" }, { text: "" });
                chart.series[0].setData(data1919);
                break;
            case "1918":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1918" }, { text: "" });
                chart.series[0].setData(data1918);
                break;
            case "1917":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1917" }, { text: "" });
                chart.series[0].setData(data1917);
                break;
            case "1916":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1916" }, { text: "" });
                chart.series[0].setData(data1916);
                break;
            case "1915":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1915" }, { text: "" });
                chart.series[0].setData(data1915);
                break;
            case "1914":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1914" }, { text: "" });
                chart.series[0].setData(data1914);
                break;
            case "1913":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1913" }, { text: "" });
                chart.series[0].setData(data1913);
                break;
            case "1912":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1912" }, { text: "" });
                chart.series[0].setData(data1912);
                break;
            case "1911":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1911" }, { text: "" });
                chart.series[0].setData(data1911);
                break;
            case "1910":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1910" }, { text: "" });
                chart.series[0].setData(data1910);
                break;
            case "1909":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1909" }, { text: "" });
                chart.series[0].setData(data1909);
                break;
            case "1908":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1908" }, { text: "" });
                chart.series[0].setData(data1908);
                break;
            case "1907":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1907" }, { text: "" });
                chart.series[0].setData(data1907);
                break;
            case "1906":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1906" }, { text: "" });
                chart.series[0].setData(data1906);
                break;
            case "1905":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1905" }, { text: "" });
                chart.series[0].setData(data1905);
                break;
            case "1904":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1904" }, { text: "" });
                chart.series[0].setData(data1904);
                break;
            case "1903":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1903" }, { text: "" });
                chart.series[0].setData(data1903);
                break;
            case "1902":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1902" }, { text: "" });
                chart.series[0].setData(data1902);
                break;
            case "1901":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1901" }, { text: "" });
                chart.series[0].setData(data1901);
                break;
            case "1900":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1900" }, { text: "" });
                chart.series[0].setData(data1900);
                break;
        };



    });

});

$(function () {
    Highcharts.setOptions({
        lang: {
            numericSymbols: ['k', ' millions', ' milliards', ' billions']
        }
    });



    // Make sure that the dropdown is loaded correctly
    $('select').material_select();


    // Initiate the years map

    $('#CarteFranceTopPrenomHomme').highcharts('Map', {
        title: {
            text: 'Sélectionnez une année'
        },

        subtitle: {
            text: 'depuis le menu déroulant ci-dessus'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        exporting: {
            buttons: {
                contextButton: {
                    symbolStroke: '#1893B2',
                },
            },
        },

        colorAxis: {
            min: 1,
            max: 51
        },

        plotOptions: {
            map: {
                allAreas: false,
                joinBy: ['iso-a2', 'code'],
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    formatter: function () {
                        if (this.point.properties && this.point.properties.labelrank.toString() < 5) {
                            return this.point.properties['iso-a2'];
                        }
                    },
                    format: null,
                    style: {
                        fontWeight: 'bold'
                    }
                },
                mapData: Highcharts.maps['countries/fr/custom/fr-all-mainland'],
                tooltip: {
                    headerFormat: '',
                    pointFormat: '<b>{point.name}</b>' + '<br>' +
                    'Nombre total de naissances : ' + '{point.nbNaissances}' + '<br>' +
                    'Pourcentage de ' + '{point.nom}' + ' : ' + '{point.pourcentageMax }' + '<br>'
                }

            }
        },



        series: [

            {
                data: dataH2015,
                mapData: Highcharts.maps['countries/fr/custom/fr-all-mainland'],
                joinBy: 'hc-key',
                /* couleur du surlignage*/

                states: {
                    hover: {
                        color: '#a4edba'
                    }
                },
                dataLabels: {
                    enabled: true,
                    format: '{point.nom}'
                }
            }
        ],
        /* pas de légende*/
        legend: {
            enabled: false
        }
    });

    // Switch the year from the dropdown
    $('#year-selectH').change(function () {
        var chart = $('#CarteFranceTopPrenomHomme').highcharts();
        var val = $('#year-selectH').val();
        switch (val) {
            case "2015":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2015" }, { text: "" });
                chart.series[0].setData(dataH2015);
                break;
            case "2014":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2014" }, { text: "" });
                chart.series[0].setData(dataH2014);
                break;
            case "2013":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2013" }, { text: "" });
                chart.series[0].setData(dataH2013);
                break;
            case "2012":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2012" }, { text: "" });
                chart.series[0].setData(dataH2012);
                break;
            case "2011":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2011" }, { text: "" });
                chart.series[0].setData(dataH2011);
                break;
            case "2010":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2010" }, { text: "" });
                chart.series[0].setData(dataH2010);
                break;
            case "2009":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2009" }, { text: "" });
                chart.series[0].setData(dataH2009);
                break;
            case "2008":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2008" }, { text: "" });
                chart.series[0].setData(dataH2008);
                break;
            case "2007":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2007" }, { text: "" });
                chart.series[0].setData(dataH2007);
                break;
            case "2006":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2006" }, { text: "" });
                chart.series[0].setData(dataH2006);
                break;
            case "2005":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2005" }, { text: "" });
                chart.series[0].setData(dataH2005);
                break;
            case "2004":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2004" }, { text: "" });
                chart.series[0].setData(dataH2004);
                break;
            case "2003":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2003" }, { text: "" });
                chart.series[0].setData(dataH2003);
                break;
            case "2002":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2002" }, { text: "" });
                chart.series[0].setData(dataH2002);
                break;
            case "2001":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2001" }, { text: "" });
                chart.series[0].setData(dataH2001);
                break;
            case "2000":
                chart.setTitle({ text: "Les prénoms les plus données par région en 2000" }, { text: "" });
                chart.series[0].setData(dataH2000);
                break;
            case "1999":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1999" }, { text: "" });
                chart.series[0].setData(dataH1999);
                break;
            case "1998":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1998" }, { text: "" });
                chart.series[0].setData(dataH1998);
                break;
            case "1997":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1997" }, { text: "" });
                chart.series[0].setData(dataH1997);
                break;
            case "1996":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1996" }, { text: "" });
                chart.series[0].setData(dataH1996);
                break;
            case "1995":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1995" }, { text: "" });
                chart.series[0].setData(dataH1995);
                break;
            case "1994":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1994" }, { text: "" });
                chart.series[0].setData(dataH1994);
                break;
            case "1993":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1993" }, { text: "" });
                chart.series[0].setData(dataH1993);
                break;
            case "1992":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1992" }, { text: "" });
                chart.series[0].setData(dataH1992);
                break;
            case "1991":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1991" }, { text: "" });
                chart.series[0].setData(dataH1991);
                break;
            case "1990":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1990" }, { text: "" });
                chart.series[0].setData(dataH1990);
                break;
            case "1989":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1989" }, { text: "" });
                chart.series[0].setData(dataH1989);
                break;
            case "1988":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1988" }, { text: "" });
                chart.series[0].setData(dataH1988);
                break;
            case "1987":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1987" }, { text: "" });
                chart.series[0].setData(dataH1987);
                break;
            case "1986":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1986" }, { text: "" });
                chart.series[0].setData(dataH1986);
                break;
            case "1985":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1985" }, { text: "" });
                chart.series[0].setData(dataH1985);
                break;
            case "1984":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1984" }, { text: "" });
                chart.series[0].setData(dataH1984);
                break;
            case "1983":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1983" }, { text: "" });
                chart.series[0].setData(dataH1983);
                break;
            case "1982":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1982" }, { text: "" });
                chart.series[0].setData(dataH1982);
                break;
            case "1981":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1981" }, { text: "" });
                chart.series[0].setData(dataH1981);
                break;
            case "1980":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1980" }, { text: "" });
                chart.series[0].setData(dataH1980);
                break;
            case "1979":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1979" }, { text: "" });
                chart.series[0].setData(dataH1979);
                break;
            case "1978":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1978" }, { text: "" });
                chart.series[0].setData(dataH1978);
                break;
            case "1977":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1977" }, { text: "" });
                chart.series[0].setData(dataH1977);
                break;
            case "1976":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1976" }, { text: "" });
                chart.series[0].setData(dataH1976);
                break;
            case "1975":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1975" }, { text: "" });
                chart.series[0].setData(dataH1975);
                break;
            case "1974":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1974" }, { text: "" });
                chart.series[0].setData(dataH1974);
                break;
            case "1973":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1973" }, { text: "" });
                chart.series[0].setData(dataH1973);
                break;
            case "1972":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1972" }, { text: "" });
                chart.series[0].setData(dataH1972);
                break;
            case "1971":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1971" }, { text: "" });
                chart.series[0].setData(dataH1971);
                break;
            case "1970":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1970" }, { text: "" });
                chart.series[0].setData(dataH1970);
                break;
            case "1969":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1969" }, { text: "" });
                chart.series[0].setData(dataH1969);
                break;
            case "1968":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1968" }, { text: "" });
                chart.series[0].setData(dataH1968);
                break;
            case "1967":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1967" }, { text: "" });
                chart.series[0].setData(dataH1967);
                break;
            case "1966":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1966" }, { text: "" });
                chart.series[0].setData(dataH1966);
                break;
            case "1965":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1965" }, { text: "" });
                chart.series[0].setData(dataH1965);
                break;
            case "1964":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1964" }, { text: "" });
                chart.series[0].setData(dataH1964);
                break;
            case "1963":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1963" }, { text: "" });
                chart.series[0].setData(dataH1963);
                break;
            case "1962":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1962" }, { text: "" });
                chart.series[0].setData(dataH1962);
                break;
            case "1961":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1961" }, { text: "" });
                chart.series[0].setData(dataH1961);
                break;
            case "1960":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1960" }, { text: "" });
                chart.series[0].setData(dataH1960);
                break;
            case "1959":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1959" }, { text: "" });
                chart.series[0].setData(dataH1959);
                break;
            case "1958":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1958" }, { text: "" });
                chart.series[0].setData(dataH1958);
                break;
            case "1957":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1957" }, { text: "" });
                chart.series[0].setData(dataH1957);
                break;
            case "1956":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1956" }, { text: "" });
                chart.series[0].setData(dataH1956);
                break;
            case "1955":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1955" }, { text: "" });
                chart.series[0].setData(dataH1955);
                break;
            case "1954":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1954" }, { text: "" });
                chart.series[0].setData(dataH1954);
                break;
            case "1953":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1953" }, { text: "" });
                chart.series[0].setData(dataH1953);
                break;
            case "1952":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1952" }, { text: "" });
                chart.series[0].setData(dataH1952);
                break;
            case "1951":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1951" }, { text: "" });
                chart.series[0].setData(dataH1951);
                break;
            case "1950":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1950" }, { text: "" });
                chart.series[0].setData(dataH1950);
                break;
            case "1949":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1949" }, { text: "" });
                chart.series[0].setData(dataH1949);
                break;
            case "1948":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1948" }, { text: "" });
                chart.series[0].setData(dataH1948);
                break;
            case "1947":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1947" }, { text: "" });
                chart.series[0].setData(dataH1947);
                break;
            case "1946":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1946" }, { text: "" });
                chart.series[0].setData(dataH1946);
                break;
            case "1945":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1945" }, { text: "" });
                chart.series[0].setData(dataH1945);
                break;
            case "1944":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1944" }, { text: "" });
                chart.series[0].setData(dataH1944);
                break;
            case "1943":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1943" }, { text: "" });
                chart.series[0].setData(dataH1943);
                break;
            case "1942":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1942" }, { text: "" });
                chart.series[0].setData(dataH1942);
                break;
            case "1941":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1941" }, { text: "" });
                chart.series[0].setData(dataH1941);
                break;
            case "1940":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1940" }, { text: "" });
                chart.series[0].setData(dataH1940);
                break;
            case "1939":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1939" }, { text: "" });
                chart.series[0].setData(dataH1939);
                break;
            case "1938":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1938" }, { text: "" });
                chart.series[0].setData(dataH1938);
                break;
            case "1937":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1937" }, { text: "" });
                chart.series[0].setData(dataH1937);
                break;
            case "1936":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1936" }, { text: "" });
                chart.series[0].setData(dataH1936);
                break;
            case "1935":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1935" }, { text: "" });
                chart.series[0].setData(dataH1935);
                break;
            case "1934":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1934" }, { text: "" });
                chart.series[0].setData(dataH1934);
                break;
            case "1933":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1933" }, { text: "" });
                chart.series[0].setData(dataH1933);
                break;
            case "1932":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1932" }, { text: "" });
                chart.series[0].setData(dataH1932);
                break;
            case "1931":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1931" }, { text: "" });
                chart.series[0].setData(dataH1931);
                break;
            case "1930":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1930" }, { text: "" });
                chart.series[0].setData(dataH1930);
                break;
            case "1929":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1929" }, { text: "" });
                chart.series[0].setData(dataH1929);
                break;
            case "1928":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1928" }, { text: "" });
                chart.series[0].setData(dataH1928);
                break;
            case "1927":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1927" }, { text: "" });
                chart.series[0].setData(dataH1927);
                break;
            case "1926":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1926" }, { text: "" });
                chart.series[0].setData(dataH1926);
                break;
            case "1925":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1925" }, { text: "" });
                chart.series[0].setData(dataH1925);
                break;
            case "1924":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1924" }, { text: "" });
                chart.series[0].setData(dataH1924);
                break;
            case "1923":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1923" }, { text: "" });
                chart.series[0].setData(dataH1923);
                break;
            case "1922":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1922" }, { text: "" });
                chart.series[0].setData(dataH1922);
                break;
            case "1921":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1921" }, { text: "" });
                chart.series[0].setData(dataH1921);
                break;
            case "1920":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1920" }, { text: "" });
                chart.series[0].setData(dataH1920);
                break;
            case "1919":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1919" }, { text: "" });
                chart.series[0].setData(dataH1919);
                break;
            case "1918":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1918" }, { text: "" });
                chart.series[0].setData(dataH1918);
                break;
            case "1917":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1917" }, { text: "" });
                chart.series[0].setData(dataH1917);
                break;
            case "1916":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1916" }, { text: "" });
                chart.series[0].setData(dataH1916);
                break;
            case "1915":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1915" }, { text: "" });
                chart.series[0].setData(dataH1915);
                break;
            case "1914":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1914" }, { text: "" });
                chart.series[0].setData(dataH1914);
                break;
            case "1913":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1913" }, { text: "" });
                chart.series[0].setData(dataH1913);
                break;
            case "1912":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1912" }, { text: "" });
                chart.series[0].setData(dataH1912);
                break;
            case "1911":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1911" }, { text: "" });
                chart.series[0].setData(dataH1911);
                break;
            case "1910":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1910" }, { text: "" });
                chart.series[0].setData(dataH1910);
                break;
            case "1909":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1909" }, { text: "" });
                chart.series[0].setData(dataH1909);
                break;
            case "1908":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1908" }, { text: "" });
                chart.series[0].setData(dataH1908);
                break;
            case "1907":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1907" }, { text: "" });
                chart.series[0].setData(dataH1907);
                break;
            case "1906":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1906" }, { text: "" });
                chart.series[0].setData(dataH1906);
                break;
            case "1905":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1905" }, { text: "" });
                chart.series[0].setData(dataH1905);
                break;
            case "1904":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1904" }, { text: "" });
                chart.series[0].setData(dataH1904);
                break;
            case "1903":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1903" }, { text: "" });
                chart.series[0].setData(dataH1903);
                break;
            case "1902":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1902" }, { text: "" });
                chart.series[0].setData(dataH1902);
                break;
            case "1901":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1901" }, { text: "" });
                chart.series[0].setData(dataH1901);
                break;
            case "1900":
                chart.setTitle({ text: "Les prénoms les plus données par région en 1900" }, { text: "" });
                chart.series[0].setData(dataH1900);
                break;
        };


    });

});


	$(function () {

		Highcharts.setOptions({
			lang: 
			{
				numericSymbols: ['k', ' millions', ' milliards', ' billions']
			}
		});



    // Make sure that the dropdown is loaded correctly
		$('select').material_select();


    // Initiate the years map

		$('#CourbePrenom').highcharts({

        title: {
            text: 'Selectionnez un titre'
        },

        subtitle: {
            text: 'depuis le menu déroulant ci-dessus'
        },

        yAxis: {
            title: {
                text: 'Nombre de naissances'
            }
        },
        legend: {
            enabled: false
        },

        plotOptions: {
            series: {
                pointStart: 1900
            }
        },

        series: [{
            name: 'Nombre de naissances',
            data: [848, 926, 972, 987, 1018, 982, 1034, 1036, 1060, 1049, 1089, 954, 1110, 1013, 979, 682, 515, 554, 598, 609, 995, 982, 867, 837, 754, 787, 671, 675, 640, 585, 523, 480, 456, 425, 421, 341, 369, 343, 310, 267, 264, 189, 201, 175, 158, 167, 194, 184, 214, 198, 180, 171, 4, 168, 3, 146, 110, 97, 119, 96, 126, 74, 102, 92, 59, 63, 77, 60, 77, 90, 71, 101, 115, 105, 105, 148, 250, 341, 485, 672, 1123, 1705, 1771, 1774, 2227, 3034, 3683, 3915, 4204, 4178, 4222, 4357, 3855, 3480, 3920, 3915, 3630, 3911, 3619, 3643, 3634, 3399, 2856, 2407, 2347, 2163, 2022, 1764, 1573, 1502, 1350, 1341, 1304, 1061, 1143, 968, 14]
        }]

    });

    // Switch the year from the dropdown
			$('#autocomplete-input').change(function(){
      setTimeout(function () {
        var val = $('#autocomplete-input').val();
        console.log('Updating chart for: ' + val);
        var chart = $('#CourbePrenom').highcharts();
        switch (val) {
            case "Adrien":
                chart.setTitle({ text: " Naissances pour le prénom Adrien" }, { text: "" });
                chart.series[0].setData(data3000);
                chart.series[0].setName({ text: " Naissances pour le prénom Adrien" }, { text: "" });

                break;
            case "Agnès":
                chart.setTitle({ text: " Naissances pour le prénom Agnès" }, { text: "" });
                chart.series[0].setData(data3001);
                break;
            case "Alain":
                chart.setTitle({ text: " Naissances pour le prénom Alain" }, { text: "" });
                chart.series[0].setData(data3002);
                break;
            case "Alexandra":
                chart.setTitle({ text: " Naissances pour le prénom Alexandra" }, { text: "" });
                chart.series[0].setData(data3003);
                break;
            case "Alexandre":
                chart.setTitle({ text: " Naissances pour le prénom Alexandre" }, { text: "" });
                chart.series[0].setData(data3004);
                break;
            case "Alice":
                chart.setTitle({ text: " Naissances pour le prénom Alice" }, { text: "" });
                chart.series[0].setData(data3005);
                break;
            case "Amandine":
                chart.setTitle({ text: " Naissances pour le prénom Amandine" }, { text: "" });
                chart.series[0].setData(data3006);
                break;
            case "Amélie":
                chart.setTitle({ text: " Naissances pour le prénom Amélie" }, { text: "" });
                chart.series[0].setData(data3007);
                break;
            case "Anaïs":
                chart.setTitle({ text: " Naissances pour le prénom Anaïs" }, { text: "" });
                chart.series[0].setData(data3008);
                break;
            case "Angelique":
                chart.setTitle({ text: " Naissances pour le prénom Angelique" }, { text: "" });
                chart.series[0].setData(data3009);
                break;
            case "Anne":
                chart.setTitle({ text: " Naissances pour le prénom Anne" }, { text: "" });
                chart.series[0].setData(data3010);
                break;
            case "Annick":
                chart.setTitle({ text: " Naissances pour le prénom Annick" }, { text: "" });
                chart.series[0].setData(data3011);
                break;
            case "Annie":
                chart.setTitle({ text: " Naissances pour le prénom Annie" }, { text: "" });
                chart.series[0].setData(data3012);
                break;
            case "Anthony":
                chart.setTitle({ text: " Naissances pour le prénom Anthony" }, { text: "" });
                chart.series[0].setData(data3013);
                break;
            case "Antoine":
                chart.setTitle({ text: " Naissances pour le prénom Antoine" }, { text: "" });
                chart.series[0].setData(data3014);
                break;
            case "Arnaud":
                chart.setTitle({ text: " Naissances pour le prénom Arnaud" }, { text: "" });
                chart.series[0].setData(data3015);
                break;
            case "Arthur":
                chart.setTitle({ text: " Naissances pour le prénom Arthur" }, { text: "" });
                chart.series[0].setData(data3016);
                break;
            case "Audrey":
                chart.setTitle({ text: " Naissances pour le prénom Audrey" }, { text: "" });
                chart.series[0].setData(data3017);
                break;
            case "Aurélie":
                chart.setTitle({ text: " Naissances pour le prénom Aurélie" }, { text: "" });
                chart.series[0].setData(data3018);
                break;
            case "Aurélien":
                chart.setTitle({ text: " Naissances pour le prénom Aurélien" }, { text: "" });
                chart.series[0].setData(data3019);
                break;
            case "Aurore":
                chart.setTitle({ text: " Naissances pour le prénom Aurore" }, { text: "" });
                chart.series[0].setData(data3020);
                break;
            case "Baptiste":
                chart.setTitle({ text: " Naissances pour le prénom Baptiste" }, { text: "" });
                chart.series[0].setData(data3021);
                break;
            case "Béatrice":
                chart.setTitle({ text: " Naissances pour le prénom Béatrice" }, { text: "" });
                chart.series[0].setData(data3022);
                break;
            case "Benjamin":
                chart.setTitle({ text: " Naissances pour le prénom Benjamin" }, { text: "" });
                chart.series[0].setData(data3023);
                break;
            case "Benoît":
                chart.setTitle({ text: " Naissances pour le prénom Benoît" }, { text: "" });
                chart.series[0].setData(data3024);
                break;
            case "Bernard":
                chart.setTitle({ text: " Naissances pour le prénom Bernard" }, { text: "" });
                chart.series[0].setData(data3025);
                break;
            case "Brigitte":
                chart.setTitle({ text: " Naissances pour le prénom Brigitte" }, { text: "" });
                chart.series[0].setData(data3026);
                break;
            case "Bruno":
                chart.setTitle({ text: " Naissances pour le prénom Bruno" }, { text: "" });
                chart.series[0].setData(data3027);
                break;
            case "Camille":
                chart.setTitle({ text: " Naissances pour le prénom Camille" }, { text: "" });
                chart.series[0].setData(data3028);
                break;
            case "Carole":
                chart.setTitle({ text: " Naissances pour le prénom Carole" }, { text: "" });
                chart.series[0].setData(data3029);
                break;
            case "Caroline":
                chart.setTitle({ text: " Naissances pour le prénom Caroline" }, { text: "" });
                chart.series[0].setData(data3030);
                break;
            case "Catherine":
                chart.setTitle({ text: " Naissances pour le prénom Catherine" }, { text: "" });
                chart.series[0].setData(data3031);
                break;
            case "Cécile":
                chart.setTitle({ text: " Naissances pour le prénom Cécile" }, { text: "" });
                chart.series[0].setData(data3032);
                break;
            case "Cedric":
                chart.setTitle({ text: " Naissances pour le prénom Cedric" }, { text: "" });
                chart.series[0].setData(data3033);
                break;
            case "Céline":
                chart.setTitle({ text: " Naissances pour le prénom Céline" }, { text: "" });
                chart.series[0].setData(data3034);
                break;
            case "Chantal":
                chart.setTitle({ text: " Naissances pour le prénom Chantal" }, { text: "" });
                chart.series[0].setData(data3035);
                break;
            case "Charlotte":
                chart.setTitle({ text: " Naissances pour le prénom Charlotte" }, { text: "" });
                chart.series[0].setData(data3036);
                break;
            case "Chloé":
                chart.setTitle({ text: " Naissances pour le prénom Chloé" }, { text: "" });
                chart.series[0].setData(data3037);
                break;
            case "Christelle":
                chart.setTitle({ text: " Naissances pour le prénom Christelle" }, { text: "" });
                chart.series[0].setData(data3038);
                break;
            case "Christian":
                chart.setTitle({ text: " Naissances pour le prénom Christian" }, { text: "" });
                chart.series[0].setData(data3039);
                break;
            case "Christiane":
                chart.setTitle({ text: " Naissances pour le prénom Christiane" }, { text: "" });
                chart.series[0].setData(data3040);
                break;
            case "Christine":
                chart.setTitle({ text: " Naissances pour le prénom Christine" }, { text: "" });
                chart.series[0].setData(data3041);
                break;
            case "Christophe":
                chart.setTitle({ text: " Naissances pour le prénom Christophe" }, { text: "" });
                chart.series[0].setData(data3042);
                break;
            case "Cindy":
                chart.setTitle({ text: " Naissances pour le prénom Cindy" }, { text: "" });
                chart.series[0].setData(data3043);
                break;
            case "Claire":
                chart.setTitle({ text: " Naissances pour le prénom Claire" }, { text: "" });
                chart.series[0].setData(data3044);
                break;
            case "Clara":
                chart.setTitle({ text: " Naissances pour le prénom Clara" }, { text: "" });
                chart.series[0].setData(data3045);
                break;
            case "Claudine":
                chart.setTitle({ text: " Naissances pour le prénom Claudine" }, { text: "" });
                chart.series[0].setData(data3046);
                break;
            case "Clément":
                chart.setTitle({ text: " Naissances pour le prénom Clément" }, { text: "" });
                chart.series[0].setData(data3047);
                break;
            case "Corinne":
                chart.setTitle({ text: " Naissances pour le prénom Corinne" }, { text: "" });
                chart.series[0].setData(data3048);
                break;
            case "Cyril":
                chart.setTitle({ text: " Naissances pour le prénom Cyril" }, { text: "" });
                chart.series[0].setData(data3049);
                break;
            case "Damien":
                chart.setTitle({ text: " Naissances pour le prénom Damien" }, { text: "" });
                chart.series[0].setData(data3050);
                break;
            case "Daniel":
                chart.setTitle({ text: " Naissances pour le prénom Daniel" }, { text: "" });
                chart.series[0].setData(data3051);
                break;
            case "David":
                chart.setTitle({ text: " Naissances pour le prénom David" }, { text: "" });
                chart.series[0].setData(data3052);
                break;
            case "Delphine":
                chart.setTitle({ text: " Naissances pour le prénom Delphine" }, { text: "" });
                chart.series[0].setData(data3053);
                break;
            case "Denis":
                chart.setTitle({ text: " Naissances pour le prénom Denis" }, { text: "" });
                chart.series[0].setData(data3054);
                break;
            case "Didier":
                chart.setTitle({ text: " Naissances pour le prénom Didier" }, { text: "" });
                chart.series[0].setData(data3055);
                break;
            case "Dominique":
                chart.setTitle({ text: " Naissances pour le prénom Dominique" }, { text: "" });
                chart.series[0].setData(data3056);
                break;
            case "Dylan":
                chart.setTitle({ text: " Naissances pour le prénom Dylan" }, { text: "" });
                chart.series[0].setData(data3057);
                break;
            case "Elisabeth":
                chart.setTitle({ text: " Naissances pour le prénom Elisabeth" }, { text: "" });
                chart.series[0].setData(data3058);
                break;
            case "Elise":
                chart.setTitle({ text: " Naissances pour le prénom Elise" }, { text: "" });
                chart.series[0].setData(data3059);
                break;
            case "Elodie":
                chart.setTitle({ text: " Naissances pour le prénom Elodie" }, { text: "" });
                chart.series[0].setData(data3060);
                break;
            case "Emilie":
                chart.setTitle({ text: " Naissances pour le prénom Emilie" }, { text: "" });
                chart.series[0].setData(data3061);
                break;
            case "Emma":
                chart.setTitle({ text: " Naissances pour le prénom Emma" }, { text: "" });
                chart.series[0].setData(data3062);
                break;
            case "Emmanuel":
                chart.setTitle({ text: " Naissances pour le prénom Emmanuel" }, { text: "" });
                chart.series[0].setData(data3063);
                break;
            case "Emmanuelle":
                chart.setTitle({ text: " Naissances pour le prénom Emmanuelle" }, { text: "" });
                chart.series[0].setData(data3064);
                break;
            case "Enzo":
                chart.setTitle({ text: " Naissances pour le prénom Enzo" }, { text: "" });
                chart.series[0].setData(data3065);
                break;
            case "Eric":
                chart.setTitle({ text: " Naissances pour le prénom Eric" }, { text: "" });
                chart.series[0].setData(data3066);
                break;
            case "Estelle":
                chart.setTitle({ text: " Naissances pour le prénom Estelle" }, { text: "" });
                chart.series[0].setData(data3067);
                break;
            case "Eva":
                chart.setTitle({ text: " Naissances pour le prénom Eva" }, { text: "" });
                chart.series[0].setData(data3068);
                break;
            case "Evelyne":
                chart.setTitle({ text: " Naissances pour le prénom Evelyne" }, { text: "" });
                chart.series[0].setData(data3069);
                break;
            case "Fabien":
                chart.setTitle({ text: " Naissances pour le prénom Fabien" }, { text: "" });
                chart.series[0].setData(data3070);
                break;
            case "Fabienne":
                chart.setTitle({ text: " Naissances pour le prénom Fabienne" }, { text: "" });
                chart.series[0].setData(data3071);
                break;
            case "Fanny":
                chart.setTitle({ text: " Naissances pour le prénom Fanny" }, { text: "" });
                chart.series[0].setData(data3072);
                break;
            case "Florence":
                chart.setTitle({ text: " Naissances pour le prénom Florence" }, { text: "" });
                chart.series[0].setData(data3073);
                break;
            case "Florent":
                chart.setTitle({ text: " Naissances pour le prénom Florent" }, { text: "" });
                chart.series[0].setData(data3074);
                break;
            case "Florian":
                chart.setTitle({ text: " Naissances pour le prénom Florian" }, { text: "" });
                chart.series[0].setData(data3075);
                break;
            case "Francis":
                chart.setTitle({ text: " Naissances pour le prénom Francis" }, { text: "" });
                chart.series[0].setData(data3076);
                break;
            case "Franck":
                chart.setTitle({ text: " Naissances pour le prénom Franck" }, { text: "" });
                chart.series[0].setData(data3077);
                break;
            case "François":
                chart.setTitle({ text: " Naissances pour le prénom François" }, { text: "" });
                chart.series[0].setData(data3078);
                break;
            case "Françoise":
                chart.setTitle({ text: " Naissances pour le prénom Françoise" }, { text: "" });
                chart.series[0].setData(data3079);
                break;
            case "Frédéric":
                chart.setTitle({ text: " Naissances pour le prénom Frédéric" }, { text: "" });
                chart.series[0].setData(data3080);
                break;
            case "Gabriel":
                chart.setTitle({ text: " Naissances pour le prénom Gabriel" }, { text: "" });
                chart.series[0].setData(data3081);
                break;
            case "Gilles":
                chart.setTitle({ text: " Naissances pour le prénom Gilles" }, { text: "" });
                chart.series[0].setData(data3082);
                break;
            case "Gregory":
                chart.setTitle({ text: " Naissances pour le prénom Gregory" }, { text: "" });
                chart.series[0].setData(data3083);
                break;
            case "Guillaume":
                chart.setTitle({ text: " Naissances pour le prénom Guillaume" }, { text: "" });
                chart.series[0].setData(data3084);
                break;
            case "Hélène":
                chart.setTitle({ text: " Naissances pour le prénom Hélène" }, { text: "" });
                chart.series[0].setData(data3085);
                break;
            case "Hervé":
                chart.setTitle({ text: " Naissances pour le prénom Hervé" }, { text: "" });
                chart.series[0].setData(data3086);
                break;
            case "Hugo":
                chart.setTitle({ text: " Naissances pour le prénom Hugo" }, { text: "" });
                chart.series[0].setData(data3087);
                break;
            case "Inès":
                chart.setTitle({ text: " Naissances pour le prénom Inès" }, { text: "" });
                chart.series[0].setData(data3088);
                break;
            case "Isabelle":
                chart.setTitle({ text: " Naissances pour le prénom Isabelle" }, { text: "" });
                chart.series[0].setData(data3089);
                break;
            case "Jacqueline":
                chart.setTitle({ text: " Naissances pour le prénom Jacqueline" }, { text: "" });
                chart.series[0].setData(data3090);
                break;
            case "Jacques":
                chart.setTitle({ text: " Naissances pour le prénom Jacques" }, { text: "" });
                chart.series[0].setData(data3091);
                break;
            case "Jade":
                chart.setTitle({ text: " Naissances pour le prénom Jade" }, { text: "" });
                chart.series[0].setData(data3092);
                break;
            case "Jean":
                chart.setTitle({ text: " Naissances pour le prénom Jean" }, { text: "" });
                chart.series[0].setData(data3093);
                break;
            case "Jean-claude":
                chart.setTitle({ text: " Naissances pour le prénom Jean-claude" }, { text: "" });
                chart.series[0].setData(data3094);
                break;
            case "Jean-françois":
                chart.setTitle({ text: " Naissances pour le prénom Jean-françois" }, { text: "" });
                chart.series[0].setData(data3095);
                break;
            case "Jean-luc":
                chart.setTitle({ text: " Naissances pour le prénom Jean-luc" }, { text: "" });
                chart.series[0].setData(data3096);
                break;
            case "Jean-marc":
                chart.setTitle({ text: " Naissances pour le prénom Jean-marc" }, { text: "" });
                chart.series[0].setData(data3097);
                break;
            case "Jean-michel":
                chart.setTitle({ text: " Naissances pour le prénom Jean-michel" }, { text: "" });
                chart.series[0].setData(data3098);
                break;
            case "Jean-paul":
                chart.setTitle({ text: " Naissances pour le prénom Jean-paul" }, { text: "" });
                chart.series[0].setData(data3099);
                break;
            case "Jean-pierre":
                chart.setTitle({ text: " Naissances pour le prénom Jean-pierre" }, { text: "" });
                chart.series[0].setData(data3100);
                break;
            case "Jennifer":
                chart.setTitle({ text: " Naissances pour le prénom Jennifer" }, { text: "" });
                chart.series[0].setData(data3101);
                break;
            case "Jeremy":
                chart.setTitle({ text: " Naissances pour le prénom Jeremy" }, { text: "" });
                chart.series[0].setData(data3102);
                break;
            case "Jerome":
                chart.setTitle({ text: " Naissances pour le prénom Jerome" }, { text: "" });
                chart.series[0].setData(data3103);
                break;
            case "Jessica":
                chart.setTitle({ text: " Naissances pour le prénom Jessica" }, { text: "" });
                chart.series[0].setData(data3104);
                break;
            case "Jocelyne":
                chart.setTitle({ text: " Naissances pour le prénom Jocelyne" }, { text: "" });
                chart.series[0].setData(data3105);
                break;
            case "Joël":
                chart.setTitle({ text: " Naissances pour le prénom Joël" }, { text: "" });
                chart.series[0].setData(data3106);
                break;
            case "Joëlle":
                chart.setTitle({ text: " Naissances pour le prénom Joëlle" }, { text: "" });
                chart.series[0].setData(data3107);
                break;
            case "Jonathan":
                chart.setTitle({ text: " Naissances pour le prénom Jonathan" }, { text: "" });
                chart.series[0].setData(data3108);
                break;
            case "Jules":
                chart.setTitle({ text: " Naissances pour le prénom Jules" }, { text: "" });
                chart.series[0].setData(data3109);
                break;
            case "Julie":
                chart.setTitle({ text: " Naissances pour le prénom Julie" }, { text: "" });
                chart.series[0].setData(data3110);
                break;
            case "Julien":
                chart.setTitle({ text: " Naissances pour le prénom Julien" }, { text: "" });
                chart.series[0].setData(data3111);
                break;
            case "Juliette":
                chart.setTitle({ text: " Naissances pour le prénom Juliette" }, { text: "" });
                chart.series[0].setData(data3112);
                break;
            case "Justine":
                chart.setTitle({ text: " Naissances pour le prénom Justine" }, { text: "" });
                chart.series[0].setData(data3113);
                break;
            case "Karine":
                chart.setTitle({ text: " Naissances pour le prénom Karine" }, { text: "" });
                chart.series[0].setData(data3114);
                break;
            case "Kevin":
                chart.setTitle({ text: " Naissances pour le prénom Kevin" }, { text: "" });
                chart.series[0].setData(data3115);
                break;
            case "Laetitia":
                chart.setTitle({ text: " Naissances pour le prénom Laetitia" }, { text: "" });
                chart.series[0].setData(data3116);
                break;
            case "Laura":
                chart.setTitle({ text: " Naissances pour le prénom Laura" }, { text: "" });
                chart.series[0].setData(data3117);
                break;
            case "Laure":
                chart.setTitle({ text: " Naissances pour le prénom Laure" }, { text: "" });
                chart.series[0].setData(data3118);
                break;
            case "Laurence":
                chart.setTitle({ text: " Naissances pour le prénom Laurence" }, { text: "" });
                chart.series[0].setData(data3119);
                break;
            case "Laurent":
                chart.setTitle({ text: " Naissances pour le prénom Laurent" }, { text: "" });
                chart.series[0].setData(data3120);
                break;
            case "Léa":
                chart.setTitle({ text: " Naissances pour le prénom Léa" }, { text: "" });
                chart.series[0].setData(data3121);
                break;
            case "Lionel":
                chart.setTitle({ text: " Naissances pour le prénom Lionel" }, { text: "" });
                chart.series[0].setData(data3122);
                break;
            case "Lisa":
                chart.setTitle({ text: " Naissances pour le prénom Lisa" }, { text: "" });
                chart.series[0].setData(data3123);
                break;
            case "Loïc":
                chart.setTitle({ text: " Naissances pour le prénom Loïc" }, { text: "" });
                chart.series[0].setData(data3124);
                break;
            case "Louis":
                chart.setTitle({ text: " Naissances pour le prénom Louis" }, { text: "" });
                chart.series[0].setData(data3125);
                break;
            case "Louise":
                chart.setTitle({ text: " Naissances pour le prénom Louise" }, { text: "" });
                chart.series[0].setData(data3126);
                break;
            case "Lucas":
                chart.setTitle({ text: " Naissances pour le prénom Lucas" }, { text: "" });
                chart.series[0].setData(data3127);
                break;
            case "Lucie":
                chart.setTitle({ text: " Naissances pour le prénom Lucie" }, { text: "" });
                chart.series[0].setData(data3128);
                break;
            case "Ludovic":
                chart.setTitle({ text: " Naissances pour le prénom Ludovic" }, { text: "" });
                chart.series[0].setData(data3129);
                break;
            case "Magali":
                chart.setTitle({ text: " Naissances pour le prénom Magali" }, { text: "" });
                chart.series[0].setData(data3130);
                break;
            case "Manon":
                chart.setTitle({ text: " Naissances pour le prénom Manon" }, { text: "" });
                chart.series[0].setData(data3131);
                break;
            case "Marc":
                chart.setTitle({ text: " Naissances pour le prénom Marc" }, { text: "" });
                chart.series[0].setData(data3132);
                break;
            case "Marie":
                chart.setTitle({ text: " Naissances pour le prénom Marie" }, { text: "" });
                chart.series[0].setData(data3133);
                break;
            case "Marie-christine":
                chart.setTitle({ text: " Naissances pour le prénom Marie-christine" }, { text: "" });
                chart.series[0].setData(data3134);
                break;
            case "Marine":
                chart.setTitle({ text: " Naissances pour le prénom Marine" }, { text: "" });
                chart.series[0].setData(data3135);
                break;
            case "Marion":
                chart.setTitle({ text: " Naissances pour le prénom Marion" }, { text: "" });
                chart.series[0].setData(data3136);
                break;
            case "Martine":
                chart.setTitle({ text: " Naissances pour le prénom Martine" }, { text: "" });
                chart.series[0].setData(data3137);
                break;
            case "Mathieu":
                chart.setTitle({ text: " Naissances pour le prénom Mathieu" }, { text: "" });
                chart.series[0].setData(data3138);
                break;
            case "Mathilde":
                chart.setTitle({ text: " Naissances pour le prénom Mathilde" }, { text: "" });
                chart.series[0].setData(data3139);
                break;
            case "Mathis":
                chart.setTitle({ text: " Naissances pour le prénom Mathis" }, { text: "" });
                chart.series[0].setData(data3140);
                break;
            case "Matthieu":
                chart.setTitle({ text: " Naissances pour le prénom Matthieu" }, { text: "" });
                chart.series[0].setData(data3141);
                break;
            case "Mélanie":
                chart.setTitle({ text: " Naissances pour le prénom Mélanie" }, { text: "" });
                chart.series[0].setData(data3142);
                break;
            case "Mélissa":
                chart.setTitle({ text: " Naissances pour le prénom Mélissa" }, { text: "" });
                chart.series[0].setData(data3143);
                break;
            case "Michael":
                chart.setTitle({ text: " Naissances pour le prénom Michael" }, { text: "" });
                chart.series[0].setData(data3144);
                break;
            case "Michel":
                chart.setTitle({ text: " Naissances pour le prénom Michel" }, { text: "" });
                chart.series[0].setData(data3145);
                break;
            case "Michèle":
                chart.setTitle({ text: " Naissances pour le prénom Michèle" }, { text: "" });
                chart.series[0].setData(data3146);
                break;
            case "Mickael":
                chart.setTitle({ text: " Naissances pour le prénom Mickael" }, { text: "" });
                chart.series[0].setData(data3147);
                break;
            case "Mohamed":
                chart.setTitle({ text: " Naissances pour le prénom Mohamed" }, { text: "" });
                chart.series[0].setData(data3148);
                break;
            case "Monique":
                chart.setTitle({ text: " Naissances pour le prénom Monique" }, { text: "" });
                chart.series[0].setData(data3149);
                break;
            case "Morgane":
                chart.setTitle({ text: " Naissances pour le prénom Morgane" }, { text: "" });
                chart.series[0].setData(data3150);
                break;
            case "Muriel":
                chart.setTitle({ text: " Naissances pour le prénom Muriel" }, { text: "" });
                chart.series[0].setData(data3151);
                break;
            case "Myriam":
                chart.setTitle({ text: " Naissances pour le prénom Myriam" }, { text: "" });
                chart.series[0].setData(data3152);
                break;
            case "Nadia":
                chart.setTitle({ text: " Naissances pour le prénom Nadia" }, { text: "" });
                chart.series[0].setData(data3153);
                break;
            case "Nadine":
                chart.setTitle({ text: " Naissances pour le prénom Nadine" }, { text: "" });
                chart.series[0].setData(data3154);
                break;
            case "Nathalie":
                chart.setTitle({ text: " Naissances pour le prénom Nathalie" }, { text: "" });
                chart.series[0].setData(data3155);
                break;
            case "Nathan":
                chart.setTitle({ text: " Naissances pour le prénom Nathan" }, { text: "" });
                chart.series[0].setData(data3156);
                break;
            case "Nicolas":
                chart.setTitle({ text: " Naissances pour le prénom Nicolas" }, { text: "" });
                chart.series[0].setData(data3157);
                break;
            case "Nicole":
                chart.setTitle({ text: " Naissances pour le prénom Nicole" }, { text: "" });
                chart.series[0].setData(data3158);
                break;
            case "Océane":
                chart.setTitle({ text: " Naissances pour le prénom Océane" }, { text: "" });
                chart.series[0].setData(data3159);
                break;
            case "Olivier":
                chart.setTitle({ text: " Naissances pour le prénom Olivier" }, { text: "" });
                chart.series[0].setData(data3160);
                break;
            case "Pascal":
                chart.setTitle({ text: " Naissances pour le prénom Pascal" }, { text: "" });
                chart.series[0].setData(data3161);
                break;
            case "Pascale":
                chart.setTitle({ text: " Naissances pour le prénom Pascale" }, { text: "" });
                chart.series[0].setData(data3162);
                break;
            case "Patricia":
                chart.setTitle({ text: " Naissances pour le prénom Patricia" }, { text: "" });
                chart.series[0].setData(data3163);
                break;
            case "Patrick":
                chart.setTitle({ text: " Naissances pour le prénom Patrick" }, { text: "" });
                chart.series[0].setData(data3164);
                break;
            case "Paul":
                chart.setTitle({ text: " Naissances pour le prénom Paul" }, { text: "" });
                chart.series[0].setData(data3165);
                break;
            case "Pauline":
                chart.setTitle({ text: " Naissances pour le prénom Pauline" }, { text: "" });
                chart.series[0].setData(data3166);
                break;
            case "Philippe":
                chart.setTitle({ text: " Naissances pour le prénom Philippe" }, { text: "" });
                chart.series[0].setData(data3167);
                break;
            case "Pierre":
                chart.setTitle({ text: " Naissances pour le prénom Pierre" }, { text: "" });
                chart.series[0].setData(data3168);
                break;
            case "Quentin":
                chart.setTitle({ text: " Naissances pour le prénom Quentin" }, { text: "" });
                chart.series[0].setData(data3169);
                break;
            case "Raphaël":
                chart.setTitle({ text: " Naissances pour le prénom Raphaël" }, { text: "" });
                chart.series[0].setData(data3170);
                break;
            case "Rémi":
                chart.setTitle({ text: " Naissances pour le prénom Rémi" }, { text: "" });
                chart.series[0].setData(data3171);
                break;
            case "Romain":
                chart.setTitle({ text: " Naissances pour le prénom Romain" }, { text: "" });
                chart.series[0].setData(data3172);
                break;
            case "Sabrina":
                chart.setTitle({ text: " Naissances pour le prénom Sabrina" }, { text: "" });
                chart.series[0].setData(data3173);
                break;
            case "Samuel":
                chart.setTitle({ text: " Naissances pour le prénom Samuel" }, { text: "" });
                chart.series[0].setData(data3174);
                break;
            case "Sandra":
                chart.setTitle({ text: " Naissances pour le prénom Sandra" }, { text: "" });
                chart.series[0].setData(data3175);
                break;
            case "Sandrine":
                chart.setTitle({ text: " Naissances pour le prénom Sandrine" }, { text: "" });
                chart.series[0].setData(data3176);
                break;
            case "Sarah":
                chart.setTitle({ text: " Naissances pour le prénom Sarah" }, { text: "" });
                chart.series[0].setData(data3177);
                break;
            case "Sébastien":
                chart.setTitle({ text: " Naissances pour le prénom Sébastien" }, { text: "" });
                chart.series[0].setData(data3178);
                break;
            case "Severine":
                chart.setTitle({ text: " Naissances pour le prénom Severine" }, { text: "" });
                chart.series[0].setData(data3179);
                break;
            case "Simon":
                chart.setTitle({ text: " Naissances pour le prénom Simon" }, { text: "" });
                chart.series[0].setData(data3180);
                break;
            case "Sonia":
                chart.setTitle({ text: " Naissances pour le prénom Sonia" }, { text: "" });
                chart.series[0].setData(data3181);
                break;
            case "Sophie":
                chart.setTitle({ text: " Naissances pour le prénom Sophie" }, { text: "" });
                chart.series[0].setData(data3182);
                break;
            case "Stéphanie":
                chart.setTitle({ text: " Naissances pour le prénom Stéphanie" }, { text: "" });
                chart.series[0].setData(data3183);
                break;
            case "Sylvain":
                chart.setTitle({ text: " Naissances pour le prénom Sylvain" }, { text: "" });
                chart.series[0].setData(data3184);
                break;
            case "Sylvie":
                chart.setTitle({ text: " Naissances pour le prénom Sylvie" }, { text: "" });
                chart.series[0].setData(data3185);
                break;
            case "Théo":
                chart.setTitle({ text: " Naissances pour le prénom Théo" }, { text: "" });
                chart.series[0].setData(data3186);
                break;
            case "Thierry":
                chart.setTitle({ text: " Naissances pour le prénom Thierry" }, { text: "" });
                chart.series[0].setData(data3187);
                break;
            case "Thomas":
                chart.setTitle({ text: " Naissances pour le prénom Thomas" }, { text: "" });
                chart.series[0].setData(data3188);
                break;
            case "Tom":
                chart.setTitle({ text: " Naissances pour le prénom Tom" }, { text: "" });
                chart.series[0].setData(data3189);
                break;
            case "Valentin":
                chart.setTitle({ text: " Naissances pour le prénom Valentin" }, { text: "" });
                chart.series[0].setData(data3190);
                break;
            case "Valérie":
                chart.setTitle({ text: " Naissances pour le prénom Valérie" }, { text: "" });
                chart.series[0].setData(data3191);
                break;
            case "Vanessa":
                chart.setTitle({ text: " Naissances pour le prénom Vanessa" }, { text: "" });
                chart.series[0].setData(data3192);
                break;
            case "Véronique":
                chart.setTitle({ text: " Naissances pour le prénom Véronique" }, { text: "" });
                chart.series[0].setData(data3193);
                break;
            case "Victor":
                chart.setTitle({ text: " Naissances pour le prénom Victor" }, { text: "" });
                chart.series[0].setData(data3194);
                break;
            case "Vincent":
                chart.setTitle({ text: " Naissances pour le prénom Vincent" }, { text: "" });
                chart.series[0].setData(data3195);
                break;
            case "Virginie":
                chart.setTitle({ text: " Naissances pour le prénom Virginie" }, { text: "" });
                chart.series[0].setData(data3196);
                break;
            case "William":
                chart.setTitle({ text: " Naissances pour le prénom William" }, { text: "" });
                chart.series[0].setData(data3197);
                break;
            case "Xavier":
                chart.setTitle({ text: " Naissances pour le prénom Xavier" }, { text: "" });
                chart.series[0].setData(data3198);
                break;
            case "Yann":
                chart.setTitle({ text: " Naissances pour le prénom Yann" }, { text: "" });
                chart.series[0].setData(data3199);
                break;
        };

      }, 500);
    });

	});
});

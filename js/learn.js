                        // We store all of our data as an array and access the array when needed
                        var myWords = new Array();
                        myWords["A"] = ["Apple". "Ant". "Art"];
                        myWords["B"] = ["Bat", "Boy", "Baby", "Bear"];
                        myWords["C"] = ["Cat", "Class", "Cup"];
                        myWords["D"] = ["Dog", "Door", "Deer"];
                        myWords["E"] = ["Easter", "Eat", "Elf"];
                        myWords["F"] = ["Fun", "Fight", "Food"];
                        myWords["G"] = ["Great", "Good", "Goat"];
                        myWords["H"] = ["Happy", "House", "Hand"];
                        myWords["I"] = ["Ink", "Item", "Ice-Cream"];
                        myWords["J"] = ["Jet", "Joy", "Jeep"];
                        myWords["K"] = ["Kite", "Keg", "Kettle"];
                        myWords["L"] = ["Lamb", "Lamp", "Leg"];
                        myWords["M"] = ["Mouse", "Mat", "Meat"];
                        myWords["N"] = ["Nurse", "Nut", "Nest"];
                        myWords["O"] = ["Owl", "Orange", "Oats"];
                        myWords["P"] = ["Park", "Play", "Pie", "Panda"];
                        myWords["Q"] = ["Queen", "Quick", "Quit"];
                        myWords["R"] = ["Road", "Run", "Red"];
                        myWords["S"] = ["Star", "Speak", "Spoon"];
                        myWords["T"] = ["Tiger", "Teeth", "Team"];
                        myWords["U"] = ["Umbrella", "Up", "Under"];
                        myWords["V"] = ["Vest", "Vase", "Van"];
                        myWords["W"] = ["Wand", "Want", "Water", "Wet"];
                        myWords["X"] = ["Xylophone", "X-ray", "Xmas"];
                        myWords["Y"] = ["Young", "Yam", "Yoyo"];
                        myWords["Z"] = ["Zeal", "Zoo", "Zebra"];

                        $(document).ready(function() {

                                // Call on click when the element having class name as pass
                                $(".pass").click(function() {
                                        
                                        // get the id of the clicked element
                                        var id = $(this).attr("name");
                                        
                                        // Access the array and join all sub array elements with a comma
                                        var output = myWords[id].join(", ");
                                        
                                        // output the results as text to the results div
                                        $("#results").text(output);
                                
                                });

                        });

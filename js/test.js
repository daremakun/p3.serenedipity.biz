counters = new Array();
			
			for (i=0;i<26;i++) {
				counters[i] = 1;
			}
		
			$(document).ready(function() {
				$("li").css("display","none");
			});
			
			$("button").click(function() {
				letter = parseInt(this.getAttribute("alpha-id"));
				hideAllWordsExcept(letter);
				document.getElementById(letter).childNodes[counters[letter]].style.display = "block";
				counters[letter] = parseInt(counters[letter]) + 2;
			});
			
			function hideAllWordsExcept(letter) {
			lis = document.getElementsByTagName("li");
			for (i=0;i<lis.length;i++) {
				if(!(lis[i].className == letter)) {
					lis[i].style.display = "none";
					counters[lis[1].className] = 1;
					}
				}
			}
			
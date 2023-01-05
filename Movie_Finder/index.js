     document.getElementById("movie_poster").style.border="hidden";
            function search(){
                movie_name = document.getElementById("input").value;
                if(movie_name==""){
                    alert("Type a movie name.");
                }else
                {
                    httpRequest = new XMLHttpRequest();
                    url = "https://www.omdbapi.com/?apikey="+"20758b0a"+"&t="+movie_name;
                    httpRequest.open("GET", url);
                    httpRequest.send();
                    httpRequest.onreadystatechange = function(){
                        if(this.readyState==4 && this.status == 200){
                            movie_data = JSON.parse(this.responseText);
                            t = movie_data.Title;
                            if(t == undefined){
                                alert("No Movie Found");
                                document.getElementById("input").value= "";
                                return;
                            }
                            document.getElementById("input").value= "";
                            document.getElementById("title").innerHTML = movie_data.Title;
                            document.getElementById("movie_poster").style.border="3px solid black";
                            document.getElementById("movie_poster").src = movie_data.Poster;
                            document.getElementById("rated").innerHTML = "<b>Rated:</b> "+movie_data.Rated;
                            document.getElementById("released").innerHTML = "<b>Released On:</b> "+movie_data.Released;
                            document.getElementById("runtime").innerHTML = "<b>Runtime:</b> "+movie_data.Runtime;
                            document.getElementById("genre").innerHTML = "<b>Genre:</b> "+movie_data.Genre;
                            document.getElementById("imdbrating").innerHTML = "<b>IMDB:</b> "+movie_data.imdbRating;
                            document.getElementById("language").innerHTML = "<b>Language:</b> "+movie_data.Language;
                            document.getElementById("rt").innerHTML = "<b>Rotten Tomatoes:</b> "+movie_data.Ratings[1].Value;
                            document.getElementById("director").innerHTML = "<b>Directed By:</b> "+movie_data.Director;
                            document.getElementById("writer").innerHTML = "<b>Written By:</b> "+movie_data.Writer;
                            document.getElementById("actors").innerHTML = "<b>Actors:</b> "+movie_data.Actors;
                            document.getElementById("plot").innerHTML = "<b>Plot:</b> "+movie_data.Plot;
                            document.getElementById("boxoffice").innerHTML = "<b>Box Office:</b> "+movie_data.BoxOffice;
                            document.getElementById("production").innerHTML = "<b>Production:</b> "+movie_data.Production;
                        }
                    }
                }
            }
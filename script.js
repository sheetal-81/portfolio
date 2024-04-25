
                                //get ref to database services
                                const db = getDatabase(app);
                                document.getElementById("submit").addEventListener('click', function (e) {
                                    e.preventDefault();
                                    set(ref(db, 'user/' + document.getElementById("username").value),
                                        {
                                            username: document.getElementById("username").value,
                                            email: document.getElementById("email").value,
                                            password: document.getElementById("username").value
                        
                                        });
                                    alert("Account created successfully");
                                })
                        
                         
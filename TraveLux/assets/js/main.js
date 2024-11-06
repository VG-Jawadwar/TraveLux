

function tours()
{
    const button = document.getElementById("places");

    button.scrollIntoView({behavior : "smooth"})

}

function home()
{
    const button = document.getElementById("banner")

    button.scrollIntoView({behavior : "smooth"})
}

function changecontent(Value)
{
    var dayslist_Udaipur = new Array("5 Days","10 Days","15 Days");
    var dayslist_Andaman = new Array("6 Days","10 Days");
    var dayslist_Agra = new Array("1 Days");
    var dayslist_Manali= new Array("1 Days","2 Days");
    var dayslist_Nashik= new Array("7 Days");
    var dayslist_All = new Array("1 Days","2 Days","4 Days","6 Days")

    for(i=document.myForm_index.mylist_Days.options.length;i>0; i--)
        {
        document.myForm_index.mylist_Days.options.remove(i)
        } 

        Category=Value.options[Value.selectedIndex].value 
        if (Category != "")
        {

        if (Category == 'Udaipur')
        {
        for (i=1; i<=dayslist_Udaipur.length;i++)
        {
        document.myForm_index.mylist_Days.options[i]=new Option(dayslist_Udaipur[i-1])
        document.myForm_index.mylist_Days.options[i].value= dayslist_Udaipur[i-1]

        }

        }else if (Category == 'Andaman')
        {
        for (i=1; i<=dayslist_Andaman.length;i++)
        { 
            document.myForm_index.mylist_Days.options[i] = new Option(dayslist_Andaman[i-1])
            document.myForm_index.mylist_Days.options[i].value= dayslist_Andaman[i-1]

        }
        } else if (Category == 'Agra')
        {
        for (i=1; i<=dayslist_Agra.length;i++)
        { 
            document.myForm_index.mylist_Days.options[i] = new Option(dayslist_Agra[i-1])
            document.myForm_index.mylist_Days.options[i].value= dayslist_Agra[i-1]
        }
        } else if (Category == 'Manali')
        {
        for (i=1; i<=dayslist_Manali.length;i++)
        { 
            document.myForm_index.mylist_Days.options[i] = new Option(dayslist_Manali[i-1])
            document.myForm_index.mylist_Days.options[i].value= dayslist_Manali[i-1]
        }
        }else if (Category == 'Nashik')
        {
        for (i=1; i<=dayslist_Nashik.length;i++)
        { 
            document.myForm_index.mylist_Days.options[i] = new Option(dayslist_Nashik[i-1])
            document.myForm_index.mylist_Days.options[i].value= dayslist_Nashik[i-1]
        }
        }else if( Category == 'Kashmir' | Category == 'Ladakh' || Category == 'Munnar')
        {
        for (i=1; i<=dayslist_All.length;i++)
            { 
                document.myForm_index.mylist_Days.options[i] = new Option(dayslist_All[i-1])
                document.myForm_index.mylist_Days.options[i].value= dayslist_All[i-1]
            }
        }
    }


}

function openModel()
{
    var location = document.forms["myForm_index"]["mylist"].value
    var date  = document.forms["myForm_index"]["date"].value
    var selectedday = document.forms["myForm_index"]["mylist_Days"].value

    if(location != "" && date != "" && selectedday != "")
    {
        var value = parseInt(selectedday[0]+selectedday[1]);

        if(location == "Kashmir")
        {
            Swal.fire({
                title: "Confirm?",
                text: "Your Ticket Fare for "+ location + " is "+(1500*value)+"rs , are you sure?",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Book it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: 'Done',
                    text: 'Tickets Booked Sucessfully.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
                }
              });
        }else if(location == "Ladakh")
        {
            Swal.fire({
                title: "Confirm?",
                text: "Your Ticket Fare for "+ location + " is "+(2500*value)+"rs , are you sure?",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Book it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: 'Done',
                    text: 'Tickets Booked Sucessfully.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
                }
              });
        }else if(location == "Udaipur")
        {
            Swal.fire({
                title: "Confirm?",
                text: "Your Ticket Fare for "+ location + " is "+(5000*value)+"rs , are you sure?",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Book it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: 'Done',
                    text: 'Tickets Booked Sucessfully.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
                }
              });
        }else if(location== "Munnar")
        {
            Swal.fire({
                title: "Confirm?",
                text: "Your Ticket Fare for "+ location + " is "+(500*value)+"rs , are you sure?",
                icon: "info",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Book it!"
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire({
                    title: 'Done',
                    text: 'Tickets Booked Sucessfully.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  });
                }
              });
        }else if(location== "Andaman")
            {
                Swal.fire({
                    title: "Confirm?",
                    text: "Your Ticket Fare for "+ location + " is "+(3000*value)+"rs , are you sure?",
                    icon: "info",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, Book it!"
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire({
                        title: 'Done',
                        text: 'Tickets Booked Sucessfully.',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      });
                    }
                  });
            }else if(location== "Agra")
                {
                    Swal.fire({
                        title: "Confirm?",
                        text: "Your Ticket Fare for "+ location + " is "+(7800*value)+"rs , are you sure?",
                        icon: "info",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, Book it!"
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire({
                            title: 'Done',
                            text: 'Tickets Booked Sucessfully.',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                          });
                        }
                      });
                }else if(location== "Manali")
                    {
                        Swal.fire({
                            title: "Confirm?",
                            text: "Your Ticket Fare for "+ location + " is "+(8500*value)+"rs , are you sure?",
                            icon: "info",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, Book it!"
                          }).then((result) => {
                            if (result.isConfirmed) {
                              Swal.fire({
                                title: 'Done',
                                text: 'Tickets Booked Sucessfully.',
                                icon: 'success',
                                confirmButtonText: 'Ok'
                              });
                            }
                          });
                    }else if(location== "Nashik")
                        {
                            Swal.fire({
                                title: "Confirm?",
                                text: "Your Ticket Fare for "+ location + " is "+(3500*value)+"rs , are you sure?",
                                icon: "info",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, Book it!"
                              }).then((result) => {
                                if (result.isConfirmed) {
                                  Swal.fire({
                                    title: 'Done',
                                    text: 'Tickets Booked Sucessfully.',
                                    icon: 'success',
                                    confirmButtonText: 'Ok'
                                  });
                                }
                              });
                        }
    

    // Swal.fire({
    //     title: 'Done',
    //     text: 'Tickets Booked Sucessfully.',
    //     icon: 'success',
    //     confirmButtonText: 'Ok'
    // });

}else
{
    Swal.fire({
        title: 'Failed',
        text: 'Tickets Booking Failed!!!.',
        icon: 'error',
        confirmButtonText: 'Ok'
    });
}
}

function Contact()
{
   var open = window.open("ContactUs.html","_parent","height = 780, width = 850")
}

function Validate()
{
    var fname = document.forms["myForm"]["Fname"].value
    var mail = document.forms["myForm"]["email"].value
    var msg = document.forms["myForm"]["message"].value 
    var ptn = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/

    if(fname != "" &&  ptn.test(mail) && msg != "")
    {
        Swal.fire({
            title: 'Done',
            text: 'Details Submitted Successfully.',
            icon: 'success',
            showConfirmButton: false
        });

        setTimeout(function()
        {
            window.location = "index.html"
        },1500)  
    }else
    {
        Swal.fire({
            title: 'Failed',
            text: 'Please Enter Valid Details!!!.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
}

function AboutUs()
{
    window.location = "AboutUs.html"
}

function Ensure()
{
    var regex_pass = "Vaibhav@7612"
    var regex_username = "Vaibhav_9028"

    var username = document.forms["MyForm_Login"]["input"].value
    var password = document.forms["MyForm_Login"]["password"].value

    if(regex_username == username && regex_pass == password)
    {
        Swal.fire({
            title: 'Done',
            text: 'User Logged In Successfull.',
            icon: 'success',
            showConfirmButton: false
        });
        setTimeout(function()
    {
        window.location = "index.html"
    },1500)     
    }else if(regex_pass == password)
    {
        Swal.fire({
            title: 'Failed',
            text: 'Please Enter Valid Username!!!.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });

    }else if(regex_username == username)
    {
        Swal.fire({
            title: 'Failed',
            text: 'Please Enter Valid Password!!!.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }else
    {
        Swal.fire({
            title: 'Failed',
            text: 'Please Enter Valid Username and Password!!!.',
            icon: 'error',
            confirmButtonText: 'Ok'
        });
    }
}

function Apply(tourname)
{
    Swal.fire({
        title: "Confirm?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Booked!",
            text: "Your Booking for "+tourname+ " is Confirmed!!!",
            icon: "success"
          });
        }
      });
      
}

async function retrive() 
{
     var regex_username = "Vaibhav_9028"

    const { value: input } = await Swal.fire({
        title: "Enter your Username",
        input: "text",
        inputLabel: "Your Username",
        inputPlaceholder: "Enter your Username",
        inputValidator: (value) => {
          if (regex_username != value) {
            return "You need to write something Valid!";
          }else{
            Swal.fire('Your Emergency Password is Vaibhav@7612');
          }
        }
      });
}


function LoadContent()
{

document.getElementById("Load").onload =  Swal.fire({
    title: "<h3> Information </h3>",
    html: "<div style = 'text-align: left;'>Welcome to <b>TraveLux</b> ✈️ <br>Your Ultimate Travel Companion Explore a world of destinations, curated experiences, and exclusive offers just a login away! Whether you're dreaming of pristine beaches, vibrant cityscapes, or remote mountain escapes, TraveLux has you covered.!! <br><br> <h4>How to Get Started:</h4> <b>Username:</b> Vaibhav_9028 <b><br>Password:</b> Vaibhav@7612 <br><br>Use the credentials above to explore the TraveLux experience and see what it feels like to be a part of our community. <br><br><b>Key Features Awaiting You Inside:</b> <br><b>1)Personalized Travel Recommendations –</b> Discover destinations tailored to your interests. <br><b>2)Exclusive Member Offers –</b> Access discounts on flights, hotels, and tours. <br><b>3)Travel Itinerary Planner –</b> Plan your journey with our integrated itinerary tool. <br><b>4)24/7 Travel Support –</b> Our team is always here to help you on your adventures. <br><br><b><div style = 'text-align: center;'> Don’t just travel; TraveLux it! 🌎</div><b></div>",
    
    icon: "info"
    
  });
}

function logout()
{   
    Swal.fire({
        title: "Logout",
        html: "Are you Sure!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirm"
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Success",
            text: "you have Sucessfully Logged Out!!!.",
            icon: "success",
            showConfirmButton: false

          });

          setTimeout(function()
        {
            window.location = "Login.html"
        },1000);
        }
      });
}

var index = 1;
 var string = "Find your Next tour!"

function updateText()
{
   
    var text = document.getElementById("Btext")

    text.innerText = string.substring(0, index);

    index++

    if (index > string.length) {
        index = 1;
    }
}

setInterval( updateText ,300);
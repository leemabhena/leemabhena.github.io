const projects = [
  {
    id: 1,
    name: "Quzzie",
    desc: "Custom trivia site",
    img: "quizzie.png",
    url: "https://leemabhena.github.io/Quizzie/",
    github: "https://github.com/leemabhena/Quizzie",
    details: `
        <p> This is a trivia site.
        It uses the API from the open trivia database and it allows the user to customize the quiz, i.e build the quiz they they are interested in. 
        The player can create a quiz from the following options:
        </p>
        <ul>
            <li>Number of questions - with the default number of questions set to 10.</li>
            <li>Category - player can choose from over 20 categories.</li>
            <li>Difficulty - this has the options of easy, medium and hard.</li>
            <li>Type - there are two types, multiple choice or boolean (true / false)</li>
        </ul>
        `,
    languages: ["bootstrap.svg", "html-5.svg", "javascript.svg", "css3.svg"],
  },
  {
    id: 2,
    name: "Pokemon Guessing Game",
    desc: "Pokemon guessing game",
    img: "pokemon.png",
    url: "https://leemabhena.github.io/pokemon-guessing-game/",
    github: "https://github.com/leemabhena/pokemon-guessing-game",
    details: `
        <p> How well do you know about Pokemons? Do you want to find out? Try out this game. 
        The game was built in collaboration with Chris. 
        It uses the Pokemon API in the rapidAPIs database and uses JQuery to issue out AJAX calls.
        </p>
        <ul>
            <li> Given a pokemon picture, weight, height, abilities, weakness and type the user is given the chance to guess the pokemon. </li>
            <li>Type the answer in the checkbox and click the check button to evaluate your answer.</li>
            <li>If the answer is correct the score will be updated, else a hint is given.</li>
        </ul>
        `,
    languages: ["html-5.svg", "css3.svg", "javascript.svg"],
  },
  {
    id: 3,
    name: "100 days of code",
    desc: "Python projects from course",
    img: "100-days-of-code.png",
    url: "",
    github: "https://github.com/leemabhena/100-days-of-code",
    details: `
        <p>
        This contains all the projects from the 100 days of code course in udemy. 
        The course is in python, from basics to advanced level. 
        This is the course description from the udemy course website: 
        'You will master the Python programming language by building 100 unique projects
        over 100 days. You will learn automation, game, app and web development, data science 
        and machine learning all using Python. 
        You will be able to program in Python professionally'.
        </p>
        `,
    languages: ["python.svg"],
  },
  {
    id: 4,
    name: "Exam Scheduler",
    desc: "Uses graphs to create exam schedule",
    img: "exam-scheduler.png",
    url: "",
    github: "https://github.com/leemabhena/exam-scheduling-lab",
    details: `
        <p>
        This program uses a bidirected graph to create the exam schedule for 
        students with each student taking atmost 1 exam per day with the minimal
        number of slots possible. Each student is supposed to take the following 
        format:
        [name]
        [course-1]
        [course-2]
        [course-3]
        [course-4]
        For example:
        Lee Mabhena
        CSCI 136
        MATH 200
        ENGL 201
        PHIL 101
        The program outputs the number of slots with each course assigned a slot and 
        for each student prints out a schudule. Example of how to run the code and output
         is shown on the right.
        </p>
        `,
    languages: ["java.svg"],
  },
  {
    id: 5,
    name: "Data Structures (CS136 Labs)",
    desc: "Data structures and advanced programming.",
    img: "cs136.png",
    url: "",
    github: "https://github.com/leemabhena/cs136-labs",
    details: `
        <p>
        This directory consists of 10 labs from the data structures and advanced 
        programming class taught in Williams College in java. More information can 
        be found at the README of each project. <br>
        Summary of the labs:
        </p>
        <ol>
            <li> 
                CoinStrip - uses arrays and vectors to create a simple coinstrip game
            </li>
            <li> 
                Wordgen - uses associations to create a random writings after reading from another file.
            </li>
            <li>
                Recursion - uses recursion to solve problems such as subsequences, printing in binary,
                checking whether a string is palindrome and many more.
            </li>
            <li>
                Dummylists - extends on the implementation of double linked list nodes, to use a dummy 
                node as the head and tail.
            </li>
            <li>
                Sorting - introduces to the java sorting using Comparators and Comparators, extending a vector 
                class to support custom sorting orders and lastly introduces sorting algorithms and their implementation in java.
            </li>
            <li>
                Postscript - uses stacks to create a basic postscript language interpreter.
            </li>
            <li>
                Twotowers - introduces the idea of iterators and their implementation in java,
                bit masking as a way of creating subsets. The lab then uses iterators to solve computational problems.
            </li>
            <li>
                Lexicon - using a trie implemented a spelling corrector. I implemented a highly efficient Lexicon 
                class with functionality to suggest spelling corrections for misspelled words.
            </li>
            <li>
                Diff - uses the hashtable and hash functions to implement diff keyword like the one in unix commandline to find difference between files.
            </li>
            <li>
                Exam Scheduling - uses graphs to create exam schedule for students, avoiding schedule clashes and each student taking atmost 1 exam per day.
            </li>

        </ol>
        `,
    languages: ["java.svg"],
  },
  {
    id: 6,
    name: "School Website",
    desc: "High School Website.",
    img: "logahs.png",
    url: "",
    github: "https://github.com/leemabhena/logahs-website",
    details: ` 
    <p> 
    Developed a website for a high school using React for the frontend and Django for
    the backend.Utilized the fetch API to send HTTP requests and retrieve data from the Django server.
    Implemented user authentication and authorization for secure access to certain sections of the website.
    Used the Django Rest Framework to design and query the database for various types
    of school information, including events, staff directories, and course offerings. Created
    a dynamic calendar feature to display upcoming events and allowed users to filter events by category.
    </p>
    `,
    languages: [
      "react.svg",
      "javascript.svg",
      "html-5.svg",
      "css3.svg",
      "django.svg",
    ],
  },
  {
    id: 7,
    name: "Crypto",
    desc: "Cryptography site",
    img: "crypto.png",
    url: "https://leemabhena.github.io/crypto/",
    github: "https://github.com/leemabhena/crypto",
    details: ` 
    <p> 
    Recently l have been working on a  cryptography website project that aims 
    to provide users with a comprehensive and interactive learning experience in 
    the field of cryptography. The project include several functionalities such as:
    </p>
    <ol>
    <li>
        Image Steganography: This functionality would allow users to hide a secret message 
        within an image using least significant bit (LSB) and masking. Users would be able to 
        enter a message, and the program will hide the message in the image. They would then be
        able to download the modified image with the hidden message. Using the same site they are
        able to upload the modified image and this will decrypt the message and print it out to the screen.
    </li>
    <li> 
        Enigma Machine Simulator: This functionality would allow users to experience the historical 
        Enigma Machine, which was used by the German military during WWII to encrypt communications.
        Users would be able to choose from different Enigma models, set the machine's settings, and 
        encrypt/decrypt messages using the machine's encryption algorithm.
    </li>
    <li>
        Caesar Cipher: This functionality would allow users to encrypt/decrypt messages using
        the Caesar Cipher, one of the simplest and most widely known encryption techniques.
        Users would be able to enter a message and a shift value, and the website would then 
        encrypt/decrypt the message accordingly.
    </li>
    <li>
        Vigenere Cipher: This functionality would allow users to encrypt/decrypt messages using 
        the Vigenere Cipher, a more advanced encryption technique than the Caesar Cipher. Users 
        would be able to enter a message and a keyword, and the website would then encrypt/decrypt 
        the message using the Vigenere Cipher algorithm.
    </li>
    </ol>
    <p>
        The website  is designed to be user-friendly and interactive, with clear instructions and 
        examples provided for each functionality. It would be a great resource for anyone interested 
        in cryptography, whether they are students, hobbyists, or professionals.
    </p>
    `,
    languages: ["javascript.svg", "html-5.svg", "css3.svg"],
  },
  {
    id: 8,
    name: "Netflix Dashboard",
    desc: "Netflix dashboard using tableau.",
    img: "netflix.png",
    url: "https://public.tableau.com/app/profile/liberty3101/viz/NetflixDashboard_16749591569340/Netflix?publish=yes",
    github:
      "https://public.tableau.com/app/profile/liberty3101/viz/NetflixDashboard_16749591569340/Netflix?publish=yes",
    details: `
       <p class = 'justify'> 
       The project is a Tableau dashboard that visualizes streaming data from Netflix, using data from Kaggle. 
       The dashboard include a variety of charts and tables that allow users to explore trends and patterns 
       in the data, such as the most popular shows and movies, the countries where Netflix is most popular, and 
       the demographics of Netflix users.
       The dashboard is interactive, allowing users to filter and drill down into the data to gain deeper 
       insights. For example, users are be able to see the description of each movie, genre, date it was added,
       its release date, its rating and its duration.
       The data used in this project is sourced from a Kaggle dataset that contains information about 
       Netflix's programming, including the title, release date, and ratings for each show and movie. 
       The data is first cleaned and preprocessed to ensure that it is in a format that is compatible with
       Tableau, and then is loaded into the dashboard.
       Overall, this project aims to provide a comprehensive, user-friendly visualization of Netflix's 
       streaming data, allowing users to gain insights into the company's programming and audience trends.
       </p>
        `,
    languages: ["tableau.svg"],
  },
  {
    id: 9,
    name: "Covid Dashboard",
    desc: "Covid dashboard using tableau and HTML.",
    img: "covid-dashboard.png",
    url: "https://leemabhena.github.io/Covid-dashboard/",
    github: "https://github.com/leemabhena/Covid-dashboard",
    details: `
       <p class = 'justify'> 
       The Covid Dashboard is an interactive data visualization tool 
       that provides a comprehensive overview of the impact of the novel 
       coronavirus (COVID-19) pandemic. This dashboard is built using Tableau, 
       a powerful data visualization software, and HTML, a markup language used to build web pages.

       The dashboard focuses on three key areas: deaths, cases, and vaccinations. 
       With regards to deaths, the dashboard provides information on the number of 
       confirmed COVID-19 related deaths, as well as the case fatality rate (CFR) and 
       the daily death count. In terms of cases, the dashboard displays the number of 
       confirmed cases, the growth rate of cases, and the rate of hospitalization. 
       The vaccination section of the dashboard provides information on the number of doses 
       administered, the distribution of vaccinations by region, and the progress towards 
       achieving herd immunity.
       
       The user-friendly interface allows for easy navigation, with interactive charts 
       and graphs that allow users to explore the data in-depth.
       
       The Covid Dashboard is designed to meet the needs of both individual 
       users and organizations. For individual users, it provides a quick and easy 
       way to stay informed about the spread of the virus and the progress towards 
       controlling it. For organizations, it offers valuable insights that can be used 
       to inform decision-making, respond to the pandemic, and protect their employees and customers.
       
       Overall, the Covid Dashboard represents a valuable resource for anyone seeking 
       to understand the impact of the pandemic on a global and local scale, and to 
       stay informed about the progress towards controlling the spread of the virus.
       </p>
        `,
    languages: ["tableau.svg", "html-5.svg"],
  },
  {
    id: 10,
    name: "Make a Wish Web app",
    desc: "Make a wish app, Morgan Stanley Code2Give hackathon",
    img: "code2give.gif",
    url: "",
    github: "https://github.com/leemabhena/code-to-give",
    details: `
       <p class = 'justify'> 
       This is a desktop application prototype developed for the Make a Wish organization as 
       part of the Morgan Stanley Hackathon. The app aims to improve communication between wish 
       recipients and Make a Wish Ambassadors, particularly in remote areas where response 
       delays may occur.

      The completed application utilizes APIs for text messages, WhatsApp, and other messaging 
      apps to ensure that wish messages reach the recipients even when offline. Also wish recipients
       can ask any online volunteer question, if the wish ambassador is offline. It also provides 
       features for wish recipients to connect and chat with program alumni, upload files,
        track application status, and manage their to-do lists.
       </p>
        `,
    languages: ["react.svg", "javascript.svg", "html-5.svg", "css3.svg"],
  },
];

export default projects;

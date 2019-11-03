import React, { Component } from 'react';
import { Link } from 'react-router-dom' 
import './HowTo.css'

class HowTo extends Component {
   render() {
      return (
         <div className="registration">
            <h1>How To Guide</h1>
            <p>Using time tracker is as easy as 1, 2, 3.</p>
            <ul>
               <li>1. Sign up for an acount</li>
               <li>2. Login to your account</li>
               <li>3. Add, Read, Edit and Delete Activities</li>
            </ul>
            <hr />
            <section>
               <h2>Sign up for account</h2>
               <p>Visit the sign up page, clicking <Link to='/register'>here</Link>, then fill in the form to create a free account.</p>
            </section>
            <hr />
            <section>
               <h2>Login to your account</h2>
               <p>Visit the login page, clicking <Link to='/login'>here</Link>. Login with your user name and password.</p>
               <p><em>Don't feel like creating an account. Go ahead and test the application using the demo account. Details below:</em></p>
               <p><b>user name: </b>demo-user</p>
               <p><b>password: </b>Password1!</p>
            </section>
            <hr />
            <section>
               <h2>Add Activities</h2>
               <p>Once you've created an account, login to your account. On the activities page simpliy click on the <b>Add Activity</b> button. 
                  Enter in activity details and click on <b>Save</b> to submit your activity. Once saved, your activity will display on the activities page.</p>
               <div className='screenshots'>
                  <img className='screenshot-img' src='https://lh3.googleusercontent.com/Cuhq6IfgtD_-xHP51gSvT464jo6j7l1tY0JGQE-Ak9Y7dxQJRtS7sBFzPQEZxRKeaiCku7G9781dEAk6tyhi6qqIpYusYslFKR5KMhQ7WPsWoDyxM1wN_xO6zDG3ZzJleyczWvQQC5fMU7LPwnAZWDTO-iCSeWX532QhyL558r5T6ZHiXfa_jHWaMTTT51L5MtvMzzMacwVaf-mcntGCbye_tkOja_vDeN7ZYUPU9oMgwUgH46gQiLxVTJqcT6wNiybuUq8VuRqWCJAsrTCOQNwW_Z7aWs7pZP1K7yhByjzVvrzzy8ugQso9eYFI2JQB3ZGGhHGB2_WOEh1zUmPwVbNiG0_tlzQHm-Gv7NHFNOHWNsbDGhx5fMeZUaa4EGfGL8UcjBFGdm2qs-CUlM5fSoA6kD9GE8axnn4ZQ1xeXQ0YTeUnIr3baOEPs56n9ry-YocMRcc8BMHWn-oLEoIEwZYABaVvqAbm_Lj9h_fY2c9cBqOGTZMoFtmyULvTD5_SaU6ZjJG-YYIbN_zAjK2W5ViyXfLWdjcIxhdCuT5y9oc5JiOcWWxaj2gAJuj1_VIpc8XtVCmDMsAdWq5qL-6vPYS1dJMuUZpZksyd8ZrYPW0REqXtcXFAtflbss1_Uhd-mB7Y1lEIb9WcNq-lvmzJKMWOHGKMblUVkXqhjImmRFHxCtuIkuEk=w958-h728-no' alt='Add Activities' />
                  <p className='img-label'>Add Activity Button</p>
               </div>
            </section>
            <hr />
            <section>
               <h2>Search For An Activity</h2>
               <p>Once you've created an account, login to your account. From the activities list, select the <b>Search</b> bar and begin typing a company name. The list will auto filter as you type.</p>
               <div className='screenshots'>
                  <img className="screenshot-img" src='https://lh3.googleusercontent.com/soV9SrwR4G3TVVwaBcR5pvHIaiDqrHalFVG1voay2p50gkYHQ9Bgri2sQUsgXYFR7tDLlY3I-yFrr2nekg3RyTtQJZBCHg8zU-I8nCozJ1zXf6SFcdL8yjH--JCHS_gW5y-PKy4Rv9EYr_b0Fg9Zyuryyg3-wqgICe1_vUmY9t8QBI2Au6j-akRTs4pxKGUdO9WEaeVwU6ttmReo84W9OIHVxJy2_rIypfRmkNIJwX-sYweAeELFaL4ifFVv00oyJzJEWWsY0dCG6RWajI0RMURewKNnczZ1118ionbzU_Vy4qQeRXHjRm9qxsqF1oRvmXwBNhP9q9XNchdjFHBvcLBK2c2Xw-xXc45B2CHYB9TxqSHR0Kl7uq5ibW7KKhqgR645LltQSUqPAP08jXJIg1M7zb28e5vDUMrCuvK-yUb21xPlRBL1_HfeT3tC2XuyZRwIgOL9h1WhXaD6Z-bb8rWWpE4xoJCu64tobMdIofmONG4ADk2A9Co9rNvlGuuKYQWlft_gQLnnkQrsATW4LFwZG3fffypnGNoS88dRK2VnrNIMA3ClKnMrdWHarJ4LwjkMrrIfkAwAzx9kXJC2ISZhazd6J6YAUWIIfOUMuwObk_DpRZQCi7Wfx81q1NgZBWkzeTuNCrNMp2ML9d7ej_a33bD4mLC9P5wlxuqqlqTOyLxVaePo=w950-h1261-no' alt='Search Activity List' />
                  <p className='img-label'>Search Activity List</p>
               </div>
               <div className='screenshots'>
                  <img className="screenshot-img" src='https://lh3.googleusercontent.com/Js78F9h0YVBOZbxh58nanQboFbWYR6HFBDulW0CmPdgfSy6lPUdSteW-O3XC7Ut5TY5QCbWMCUnNDCypPoM1ay1KkJM5S9f5ezaGzeZpgBSYg_0T5FFsaJByu9s2az3C_Q-VkWo4xLB34aqDye0gw8lhD2CBrR5cROf9Ov7VfsuMNSU_HvmAJEUgQg9g09fytUD1KuVEqFEvjuZY6t2G3p5_HjnCxWxOcXrRbY01RladWNv1POefEKqo3JVKV8G-triU7NM4nLuBUuqilsFBsjCGBqU-YDkRWtVJ1yFDwkaHQ_lRd70cxDbLwmlzDOuZ-ySTv-2f3uU25sMEeGtFdfVZEcBkUqxi0G6sJF2rmxgXhX5SP9_d9cu5w0iJwNp3QF8KxtbFNuGBFSvpF4zvzKoozfdk5YlMXiKGZhEKY7BqscXhF0JwXSkkXnR5cS5sld9f13eAkDaJPKCRce0bPVWRE4lqii60P0a9nHRJ_aP0JHoeGc-yaksW4EEmhHvMi3Ymi1X2GHBnRLfu9zf0JppowK9VYIQbterx4fMr094WO7MaRNxLwWFiI_Cdw0Vo2jKKhTsr7tpJLciZUCDbbQ2yr-NYESeueGlKygOK6By-vI8qHpSjvlhIfWlE_wgXFCySYY0kqV4ieHaBoCS7OGbIisvf0RWms6tJLX2c_d49hSz08843=w961-h757-no' alt='Filter Activity List' />
                  <p className='img-label'>Filter Activity List</p>
               </div>
            </section>
            <hr />
            <section>
               <h2>Read Activity Details</h2>
               <p>Once you've created an account, login to your account. From the activities list click on the activity card to view activity details. To go back to the activities page click on <b>Back.</b></p>
               <div className='screenshots'>
                  <img className="screenshot-img" src='https://lh3.googleusercontent.com/-3TP1gXRmQk8wUiRzYknPGAQbhO238-TYE4eGw4o5OpUWlo1ircVELUMpihR_dXaiLieVAitqtD1ye4fHxmuR9uRusdOqUW4UsHTt6sXdTdhsgbRMG3dzoPiO93yMjaTydjCDwWUJZSyp-zxelFf0ZSJdd-0rfIGEiG6KNCB77tpBvmnHaC806Zyj0ItEFlPu4maNv1zNFP-YrkqhQ3lj10Kna0W3smJLFPajkniSNbMFYyUR8rk11RQvZba5gwjhm7YJQW1Y4dlX7eOWDEj7ZELcE69gsAJtuoEDLejNyA2fTYVoL8nZtLToPQFaDLjuI1m6F_JaL8cP4arIIS26ef2ZUGC_2zLuMQzqhCFC7L3rFdwvD5CmDipKg1UEs9-uqcob-qVBzqbFGLS1ouxJLKAPN9jpwCQnb__o5gxku5yibLHn9qxd0VwNn8KBmjO7TXL96KTrow5VvQiyDCAD_sckBt1uK_GjAp37satqAMaWSdWK79lAbzbseBsuzAeyHgbJ8jHppxvUwxF263RHEeqdmfbR0JBjiyKL0lpievmPyKwMJIFzTjCUfCXWHcDV3Set7NQdmNy8-RF8JoZX4PZ4iTVM47ESKB6T-E9tSqEQUjg6bCdJo5OiFjnUuGeiWRKxK4T2b3ANFeRrgr4f3jSX-QvK9NqTnvZxkeTi0cifQ6yywPU=w965-h753-no' alt='View Activity Details' />
                  <p className='img-label'>View Activity Details</p>
               </div>
               <div className='screenshots'>
                  <img className='screenshot-img' src='https://lh3.googleusercontent.com/vk7CzDomz8gLYWXH6Xp4TFrjvxGcHD957Yv9efrJ41FnrY0DjI0_oiYkC7p_YqW0TgLC720ztnJn9SJVWAbMeIJvD-62gHb40ay21xFRIznvsodHczMdl9pFHSCMpApUWLBx3ejgqu1rAkmcD0-H-bm7X8642Pk_smZgEEsjAQN0jVYiPqrKApWZCdI-SYMWqUz22-SgJCLMt0eejxYJL1KvXyhW2lUTQwqwUDW_sSZ7O9cS-NWNTp75tHosa_101MPjmiGFeRNFz1p4F_EMWygIMx-g3i4nBp8fUczoh_Ma7rhgyc3XgAkkaaSVwfSppGjvZ00GzbHHKzVlKzDPOvytSqu6zCRMd5c7n1Wpb6-znuUWgunIQ3QmD5zHzpb_3L2-vKA4HsLyc0Vl6JdCFavG0aOY9MCVVDlvBFwy664QZpoC_tABdCN6mybKgCUJMEnx5n6NMIM3w3n2qYICdUZ0t-e1NMQ8JyG8ff15eV_NZnTFRdKsyZKoJY8PXDQDPSOE3toQ47vQrDTnNqswbyoW8qQn3J0zsRYZuQF1i4j9SuCc3ZV_OXFrsa3FBp-R7rkvWht7491B3LXbC4tJ-7t5sath4HkoWvKpmY9LB2P6GxGXBmeN13lLZgB67yyn7pVBIsdxiig4CN8uMs-nzYtC-jOS0k35mIAWPdoiH9y8xlrsszl3=w878-h685-no' alt='Activity Details' />
                  <p className='img-label'>Activity Details</p>
               </div>
            </section>
            <hr />
            <section>
               <h2>Edit/Update An Activity</h2>
               <p>Once you've created an account, login to your account. From the activities page you have two ways of editing/updating an activity. <b>Option 1</b> - click on the <b>pencil/edit icon</b> as shown below. Edit/Update your activity then click <b>Save.</b></p>
               <div className='screenshots'>
                  <img className='screenshot-img' src='https://lh3.googleusercontent.com/-QGKrIn3QqfkEwGjwbkNUJz1Ub5-q1WHFzBvgxeF5LSz_bfJXOcISzpmLAvobzFPQy-TVOF-G4pwyEAeKBNCX3DNXFUEs8hGu0z5iD43joc94TlVLgIVYwrRli8B1_45iAe7s79EhbC7Dr_jyMs6iHNDRncTaez3vWWsj6gP6b4YWRuI8s55dRbKSAq-N4obSYB7ZotKq5Zo3eKk9ByQYbCCmLZsHeUuqQ8-B-cQaNYi2B7YtozSwcsgSJ01HYOSQ2dMp7e9zRTAAE7fHo6diG1pM9V-QepxP_WBf41vpzd9ylsljDZqHzDbIiiIWygOtOyjMGUVP2cyWOdmOLG_3C1gPB_RqXYR7IlfbhTESo7hZgShPzciQQCZFGrQKEsdZSHJR2BmLVsQXGXo1QhHiY-E4PGLva1mFmjowZUkxx3R5NWXWRtvSyc-oWpZpFWtTice4weBu4-vaN0-AqGY8WBspsxIppYFt6vHMxsFNfP0XU5IvMrQqNqIOpvRgeOsx38HUch7P1mFAc1EucE28SlGgwzqZAnVuXNhXxYHt7nxk46Gr1tRtHXZWBfL2sA8faS7Dx5Jdq3AySnzqfH5bbl42rDrIt2nT4ohlUA-YLxwPHYxUUkfHThSLhpmJC6Kh5Q0ecN5L0bGi-p_GB9c1f-Mr647-KdX-wR2HZO0zbRZ-2j0ONY8=w958-h728-no' alt='Edit/Update Activity Option 1' />
                  <p className='img-label'>Edit/Update Activity Option 1</p>
               </div>
               <div className='screenshots'>
                  <img className='screenshot-img' src='https://lh3.googleusercontent.com/TgTDZzTKAe-NZkNU1NF_B5yF6n8vuULv5hqAsYVoiFmuaM-fSxnqFSuDDZIBqkAo7xVe_iihOqMKwL8GPhoV3KUee0Ozieax3M95Ps1aoyAZtgOM4Yg4a50k4RDJam2wr-DLzr54lswX7TA3lTAosrmL5NqUSABHhk40AgU2A1tINL3g02Qjo-gofcJLJ81t-Obt_7toNJ6LwWw7hqI4Jh5nnZ6G76-50izg1CUmVQAFdKxNjrk0co7z25FoXcEKVlr_pbIRf7CZPfQNM2C6t5W0iXER-FT8UaF6A1ulnvfUXhRd-Ve8p4VQ0hNWj-agklBhCnt7Ub4GML71gazxTot1Y9uwER4umJsbrcOqpecwDUo89anH0YxuPxlZZLHXJ9PJO3ySBzancSAMWyRI2MS4o7eEDEV1xXa1jxPb3E61RpAtHbN7STL4rzAd1rzitc3USjk_1XwNyLVsmEG8cUxYMTpnn_PGX3XHY3CIYfIGArKeQyXY24mGOpTonQgSTTwUElDTjgsOB7_D700W7zpGba0xdHYOoOD1knlx6zEH9dbnQurigevAxqAEIeF9W2WZ2TYRmcDY7jfsLO9M-I_Mf6UEax4TVSPDS8pFlAL6lLb_hnGEDSPulB4KxjoW9zM9mAPioo8u7dCKdrpkm9cYBqtgCHae7DoN5TTxg1slQ1W3AQRP=w890-h828-no' alt='Save Edit/Update' />
                  <p className='img-label'>Save Edit/Update</p>
               </div>
               <p><b>Option 2</b> - read the activity details by clicking on the activity card. Then click on the <b>Edit</b> button. Make changes and/or updates then click on <b>Save.</b></p>
               <div className='screenshots'>
                  <img className="screenshot-img" src='https://lh3.googleusercontent.com/-3TP1gXRmQk8wUiRzYknPGAQbhO238-TYE4eGw4o5OpUWlo1ircVELUMpihR_dXaiLieVAitqtD1ye4fHxmuR9uRusdOqUW4UsHTt6sXdTdhsgbRMG3dzoPiO93yMjaTydjCDwWUJZSyp-zxelFf0ZSJdd-0rfIGEiG6KNCB77tpBvmnHaC806Zyj0ItEFlPu4maNv1zNFP-YrkqhQ3lj10Kna0W3smJLFPajkniSNbMFYyUR8rk11RQvZba5gwjhm7YJQW1Y4dlX7eOWDEj7ZELcE69gsAJtuoEDLejNyA2fTYVoL8nZtLToPQFaDLjuI1m6F_JaL8cP4arIIS26ef2ZUGC_2zLuMQzqhCFC7L3rFdwvD5CmDipKg1UEs9-uqcob-qVBzqbFGLS1ouxJLKAPN9jpwCQnb__o5gxku5yibLHn9qxd0VwNn8KBmjO7TXL96KTrow5VvQiyDCAD_sckBt1uK_GjAp37satqAMaWSdWK79lAbzbseBsuzAeyHgbJ8jHppxvUwxF263RHEeqdmfbR0JBjiyKL0lpievmPyKwMJIFzTjCUfCXWHcDV3Set7NQdmNy8-RF8JoZX4PZ4iTVM47ESKB6T-E9tSqEQUjg6bCdJo5OiFjnUuGeiWRKxK4T2b3ANFeRrgr4f3jSX-QvK9NqTnvZxkeTi0cifQ6yywPU=w965-h753-no' alt='View Activity Details' />
                  <p className='img-label'>View Activity Details</p>
               </div>
               <div className='screenshots'>
                  <img className='screenshot-img' src='https://lh3.googleusercontent.com/rJkmtI3lPlgUWQXtw5bQehMze6QHS83MLElcb0dmrJ0bUEw3sRMNFwNSmTDnGEGeH3VfyjpfLp1P-yKj_JMDBpTWz2zYyX5bmWh1pcZVX6XY2tIYo2MLpKPQhO7EQiw7uTpui5bVUzulMi8SeYk0YAnAxk_4fx111LB9Og_yPfeBrgfuazQdkqt8ttQ5HbrVD4Xc0OHGLwoGv9X_Zk3COHv_t7xLdO2muUihqThXfykfXM89ccs5_vJSR6zUL_Tz5Ixx7y_-psiQCRf3GEshQ677FJOtjZvfT2KrPX43yGlttGg3TrbcuNJE_Ovwewl9NhaalkZRR46tIz4F7Wvt4ylkMD-nqdWswkB-msRlxQX7x_Tyt58A1yRbe4ZNBXGs11G0SqJ6M1kBLUmcVoITW6c5GCU4_lhxt7mjImJQgOBmu8TnEfr_Q3SAPU48Lt7dCqG1Vp7adz0T3_QKauxlR2gwqlzR6ZnY9szAp4YOm5dqPETf_e939jTlC5_VEUeQaUXGRDvuEKqFh9ZTW7KaZjHYkCMkBrCZN0LvaZn3zpRiEo7I6P2YoVbAC9pwRKLM30UcM1YTGoa9C3HXl_u91sKnFygHrGtCKkbLYverEV3KyPwy-6gunZb3xVBTkfu-tjzWsEoawxSSNIlc8x4sI0QXgff-58694T0cyS8P3avOerii6rEp=w878-h685-no' alt='Edit/Update Activity Option 2' />
                  <p className='img-label'>Edit/Update Activity Option 2</p>
               </div>
               <div className='screenshots'>
                  <img className='screenshot-img' src='https://lh3.googleusercontent.com/TgTDZzTKAe-NZkNU1NF_B5yF6n8vuULv5hqAsYVoiFmuaM-fSxnqFSuDDZIBqkAo7xVe_iihOqMKwL8GPhoV3KUee0Ozieax3M95Ps1aoyAZtgOM4Yg4a50k4RDJam2wr-DLzr54lswX7TA3lTAosrmL5NqUSABHhk40AgU2A1tINL3g02Qjo-gofcJLJ81t-Obt_7toNJ6LwWw7hqI4Jh5nnZ6G76-50izg1CUmVQAFdKxNjrk0co7z25FoXcEKVlr_pbIRf7CZPfQNM2C6t5W0iXER-FT8UaF6A1ulnvfUXhRd-Ve8p4VQ0hNWj-agklBhCnt7Ub4GML71gazxTot1Y9uwER4umJsbrcOqpecwDUo89anH0YxuPxlZZLHXJ9PJO3ySBzancSAMWyRI2MS4o7eEDEV1xXa1jxPb3E61RpAtHbN7STL4rzAd1rzitc3USjk_1XwNyLVsmEG8cUxYMTpnn_PGX3XHY3CIYfIGArKeQyXY24mGOpTonQgSTTwUElDTjgsOB7_D700W7zpGba0xdHYOoOD1knlx6zEH9dbnQurigevAxqAEIeF9W2WZ2TYRmcDY7jfsLO9M-I_Mf6UEax4TVSPDS8pFlAL6lLb_hnGEDSPulB4KxjoW9zM9mAPioo8u7dCKdrpkm9cYBqtgCHae7DoN5TTxg1slQ1W3AQRP=w890-h828-no' alt='Save Edit/Update' />
                  <p className='img-label'>Save Edit/Update</p>
               </div>
            </section>
            <hr />
            <section>
               <h2>Delete An Activity</h2>
               <p>Once you've created an account, login to your account. From the activities list click on the <b>trash</b> icon to delete the activity. The activity will be remove from the list.</p>
               <div className='screenshots'>
                  <img className='screenshot-img' src='https://lh3.googleusercontent.com/tKDZSlgnQi5bDjggTO19tBqNJrHNmy4CLVEZ2qXf09A_67BLB4jJJRHGCXLYc_otiL3ZnggaK6w3Z1uwX2z7tRUEnPjLyhdk3Zi-7QdMZoLaZcbY9s80Yjd6Pmc_ArFed8Zyh3-T-za6uv2svG-4mjTLnNZGC2UMVl2gDQYITIiC4FBSfiTeeyLWMgb_0L7CdQPjqEBW5Tn2pnoSFyGU1bivhZXk8W012E_1XDTz-4fmM2xEiWsQOP7WORJQ12avhYOkxsb59VER7dDncoXzbW3zErkU6IocsuLLr1oHmReSdd8QpHwJsBNWXwWvv0v2lIF713U6-se7V6WP7zOSqLuoQRK-Hi-BPvjPb4Tg7fnRcMi1usYpw4JwyRcE_SRqI9rJovOjRJANLojiV8Rq9QuYgP6J7AWwJLhr4GCUDqT8GQpLjrEfG_jgVhU0Ct3XS_m8HEMQc8KPiEeExUI_4EErSxOdHwJjuP7OfZlHzrL3QYZ8ogxCpYfhrixgeXYt00tvyHw7ToIiuM-_lktndT2y5WJLzbHo_EuP_yfu3EPb2KW94MpohO3wec0kYum3sigSDQymPUmFw-LJ0WaVOzPfT9-8hLCOtILQZfKaVKxzH-A6L5RlnHxujZMs6LOV6rupxprB1jSTtalJkeW_CahXNqqgCsW-1Dw8uvEZrFktPwKaarTQ=w947-h752-no' alt='Delete Activity' />
                  <p className='img-label'>Delete Activity</p>
               </div>
            </section>
            <hr />
         </div>
      );
   }
}

export default HowTo;
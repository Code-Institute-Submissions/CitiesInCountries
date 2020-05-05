# Testing - Acceptance Testing
![Software Testing](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Software%20Testing%20-%20Simplified.png)

## Testing Criteria

### Manual Testing Technology - Unit, Integration, and System Testing
The following combination of software and hardware is used for all manual tests:

* Chrome on MacOSX (MacBook Pro) for both laptop/large display and mobile devices (inspect --> responsive).
* Firefox Developer Edition on MacOSX (MacBook Pro) for both laptop/large displays and mobile devices (Web Developer Tools --> Responsive Design Mode).
* Safari on MacOSX (MacBook Pro) for laptop/large display testing.
* Physical devices: Samsung Galaxy Note 10+ 5G with Chrome, Samsung Browser and Firefox. Apple iPhone 8 with Chrome and Safari.

### Automated Testing Technology - Acceptance (System) Testing
![Software Testing](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/documentation/Software%20Testing%20-%20Simplified.png)

Automated testing is performed using:

* [Selenium IDE](https://www.selenium.dev/selenium-ide/) - the Chrome and Firefox extensions.
* [Cities in Countries Test File](https://github.com/NaoiseGaffney/CitiesInCountries/blob/master/test/Capital%20Cities%20in%20Countries.side)

### Testing Criteria - Automated Tests Using Selenium IDE
The Acceptance Criteria is based on the Use Cases described under section Processes --> UX, with the exception of tests 001 to 003 that are general features testing.

1. 001 - Features and Functions Overview - Google Maps (geoLocation accepted)
> Running '001 - Features and Functions Overview Google Maps (geoLocation accepted)' 22:12:14
> 
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:12:14
>
> 2. setWindowSize on 1680x989 OK 22:12:14
> 
> 3. click on css=.maptype-control-satellite OK 22:12:14
> 
> 4. click on css=.zoom-control-in OK 22:12:18
> 
> 5. click on css=.zoom-control-out OK 22:12:20
> 
> 6. click on css=.zoom-control-out OK 22:12:22
> 
> 7. click on css=.zoom-control-out OK 22:12:24
> 
> 8. click on css=.maptype-control-map OK 22:12:26
> 
> 9. mouseOver on css=.maptype-control-map OK 22:12:28
> 
> 10. mouseOut on css=.maptype-control-map OK 22:12:30
> 
> 11. click on css=.zoom-control-in OK 22:12:32
> 
> 12. click on css=.zoom-control-out OK 22:12:34
> 
> 13. click on css=.zoom-control-out OK 22:12:36
> 
> '001 - Features and Functions Overview - Google Maps (geoLocation accepted)' completed successfully

2. 002 - Features and Functions Overview - Fixed Footer and CSS Modals (geoLocation accepted)
> Running '002 - Features and Functions Overview - Fixed Footer and CSS Modals (geoLocation accepted)' 22:12:44
> 
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:12:45
> 
> 2. setWindowSize on 1680x989 OK 22:12:46
> 
> 3. click on id=fa-exclamation OK 22:12:47
> 
> 4. click on css=div:nth-child(1) > p:nth-child(2) > .button:nth-child(1) OK 22:12:49
> 
> 5. click on css=.button:nth-child(2) OK 22:12:51
> 
> 6. click on linkText=Close OK 22:12:53
> 
> 7. click on id=fa-file-code-o OK 22:12:55
> 
> 8. click on css=#id02 div:nth-child(1) > .modal-link-text OK 22:12:57
> 
> 9. storeWindowHandle on root OK 22:12:59
> 
> 10. selectWindow on handle=${win9721} OK 22:13:00
> 
> 11. close OK 22:13:01
> 
> 12. selectWindow on handle=${root} OK 22:13:02
> 
> 13. click on css=#id02 div:nth-child(2) > .modal-link-text OK 22:13:03
> 
> 14. selectWindow on handle=${win8293} OK 22:13:05
> 
> 15. close OK 22:13:06
> 
> 16. selectWindow on handle=${root} OK 22:13:07
> 
> 17. click on css=#id02 div:nth-child(3) > .modal-link-text OK 22:13:08
> 
> 18.  selectWindow on handle=${win1812} OK 22:13:10
> 
> 19. close OK 22:13:11
> 
> 20. selectWindow on handle=${root} OK 22:13:12
> 
> 21. click on css=#id02 div:nth-child(4) > .modal-link-text OK 22:13:13
> 
> 22. selectWindow on handle=${win8762} OK 22:13:15
> 
> 23. close OK 22:13:16
> 
> 24. selectWindow on handle=${root} OK 22:13:17
> 
> 25. click on css=#id02 div:nth-child(5) > .modal-link-text OK 22:13:18
> 
> 26. selectWindow on handle=${win6805} OK 22:13:20
> 
> 27. mouseOver on linkText=Support OK 22:13:21
> 
> 28. close OK 22:13:25
> 
> 29. selectWindow on handle=${root} OK 22:13:26
> 
> 30. click on css=div:nth-child(6) > .modal-link-text OK 22:13:27
> 
> 31. selectWindow on handle=${win3766} OK 22:13:29
> 
> 32. close OK 22:13:30
> 
> 33. selectWindow on handle=${root} OK 22:13:31
> 
> 34. click on linkText=Close OK 22:13:32
> 
> 35. click on id=fa-code OK 22:13:34
> 
> 36. click on css=#id03 div:nth-child(1) > .modal-link-text OK 22:13:36
> 
> 37. selectWindow on handle=${win8749} OK 22:13:38
> 
> 38. mouseOver on css=.logo OK 22:13:39
> 
> 39. close OK 22:13:42
> 
> 40. selectWindow on handle=${root} OK 22:13:43
> 
> 41. click on css=#id03 div:nth-child(2) > .modal-link-text OK 22:13:44
> 
> 42. selectWindow on handle=${win536} OK 22:13:46
> 
> 43. close OK 22:13:47
> 
> 44. selectWindow on handle=${root} OK 22:13:48
> 
> 45. click on css=#id03 div:nth-child(3) > .modal-link-text OK 22:13:49
> 
> 46. selectWindow on handle=${win549} OK 22:13:51
> 
> 47. close OK 22:13:52
> 
> 48. selectWindow on handle=${root} OK 22:13:53
> 
> 49. click on linkText=-> Udemy Course on D3 & Firebase by Shaun Pelling. OK 22:13:54
> 
> 50. selectWindow on handle=${win6333} OK 22:13:56
> 
> 51. close OK 22:13:57
> 
> 52. selectWindow on handle=${root} OK 22:13:58
> 
> 53. click on css=#id03 div:nth-child(5) > .modal-link-text OK 22:13:59
> 
> 54. selectWindow on handle=${win8773} OK 22:14:01
> 
> 55. close OK 22:14:02
> 
> 56. selectWindow on handle=${root} OK 22:14:03
> 
> 57. click on linkText=Close OK 22:14:04
> 
> 58. click on id=fa-envelope-o OK 22:14:06
> 
> 59. click on id=fullname OK 22:14:08
> 
> 60. type on id=fullname with value 002 - Features and Functions Overview - Fixed Footer and CSS Modals OK 22:14:10
> 
> 61. type on id=emailaddress with value mobilecrusader@outlook.com OK 22:14:12
> 
> 62. type on id=feedback with value Selenium IDE Automated Test: 002 - Features and Functions Overview - FixedFooter and CSS Modals.\n\nKind regards,\n\nSelenium IDE OK 22:14:14
> 
> 63. click on id=contactsubmit OK 22:14:16
> 
> 64. click on linkText=Close OK 22:14:18
> 
> 65. click on id=fa-user OK 22:14:20
> 
> 66. click on linkText=-> My Resumé. OK 22:14:22
> 
> 67. selectWindow on handle=${win5355} OK 22:14:24
> 
> 68. close OK 22:14:25
> 
> 69. selectWindow on handle=${root} OK 22:14:26
> 
> 70. click on css=#id05 div:nth-child(2) > .modal-link-text OK 22:14:27
> 
> 71. selectWindow on handle=${win7821} OK 22:14:29
> 
> 72. close OK 22:14:30
> 
> 73. selectWindow on handle=${root} OK 22:14:31
> 
> 74. click on css=#id05 div:nth-child(3) > .modal-link-text OK 22:14:32
> 
> 75. selectWindow on handle=${win5942} OK 22:14:34
> 
> 76. close OK 22:14:35
> 
> 77. selectWindow on handle=${root} OK 22:14:36
> 
> 78. click on linkText=-> GaffCo Consulting Professional Communication Competence. OK 22:14:37
> 
> 79. selectWindow on handle=${win1431} OK 22:14:39
> 
> 80. close OK 22:14:40
> 
> 81. selectWindow on handle=${root} OK 22:14:41
> 
> 82. click on linkText=Close OK 22:14:42
> 
> '002 - Features and Functions Overview - Fixed Footer and CSS Modals (geoLocation accepted)' completed successfully

3. 003 - Features and Functions Overview - Samples (geoLocation accepted)
Running '003 - Features and Functions Overview - Samples (geoLocation accepted)'
22:15:37
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:15:38
> 
> 2. setWindowSize on 1680x989 OK 22:15:39
> 
> 3. click on css=#gmimap0 > area OK 22:15:40
> 
> 4. click on id=buttonOverFirhouse OK 22:15:42
> 
> 5. click on id=close OK 22:15:44
> 
> 6. click on css=#gmimap0 > area OK 22:15:46
> 
> 7. click on id=buttonStatsFirhouse OK 22:15:48
> 
> 8. click on id=close OK 22:15:50
> 
> 9. click on css=#gmimap24 > area OK 22:15:52
> 
> 10. click on id=buttonOverAmsterdam OK 22:15:54
> 
> 11. click on id=close OK 22:15:56
> 
> 12. click on css=#gmimap24 > area OK 22:15:58
> 
> 13. click on id=buttonStatsAmsterdam OK 22:16:00
> 
> 14. click on id=close OK 22:16:02
> 
> '003 - Features and Functions Overview - Samples (geoLocation accepted)' completed successfully

4. 004 - User - UC 1 - Overview and Statistics (geoLocation already accepted)
> Running '004 - User - UC 1 - Overview and Statistics (geoLocation already accepted)'. 22:16:11
> 
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:16:12
> 
> 2. setWindowSize on 1680x989 OK 22:16:13
> 
> 3. click on css=#gmimap0 > area OK 22:16:14
> 
> 4. click on id=buttonOverFirhouse OK 22:16:16
> 
> 5. click on id=close OK 22:16:18
> 
> 6. click on css=#gmimap0 > area OK 22:16:20
> 
> 7. click on id=buttonStatsFirhouse OK 22:16:22
> 
> 8. click on id=close OK 22:16:24
> 
> 9. click on css=#gmimap24 > area OK 22:16:26
> 
> 10. click on id=buttonOverAmsterdam OK 22:16:28
> 
> 11. click on id=close OK 22:16:30
> 
> 12. click on css=#gmimap24 > area OK 22:16:32
> 
> 13. click on id=buttonStatsAmsterdam OK 22:16:34
> 
> 14. click on id=close OK 22:16:36
> 
> '004 - User - UC 1 - Overview and Statistics (geoLocation already accepted) (1)' completed successfully

5. 005 - User - UC 2 - Feedback Form (geoLocation already accepted)
Running '005 - User - UC 2 - Feedback Form (geoLocation already accepted)'
22:16:52
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:16:53
> 
> 2. setWindowSize on 1680x989 OK 22:16:54
> 
> 3. click on id=fa-envelope-o OK 22:16:55
> 
> 4. click on id=fullname OK 22:16:57
> 
> 5. type on id=fullname with value Interested User OK 22:16:59
> 
> 6. type on id=emailaddress with value mobilecrusader@outlook.com OK 22:17:01
> 
> 7. click on id=feedback OK 22:17:03
> 
> 8. type on id=feedback with value 005 - User - UC 2 - Feedback Form\n\nHello!\n\nI would like to see all the World's cities and capitals with relevant information.\n\nKind regards,\n\nInterested User OK 22:17:05
> 
> 9. click on id=contactsubmit OK 22:17:07
> 
> 10. click on linkText=Close OK 22:17:09
> 
> '005 - User - UC 2 - Feedback Form (geoLocation already accepted)' completed successfully

6. 006 - User - UC 3 - CSS Modals (geoLocation already accepted)
Running '006 - User - UC 3 - CSS Modals (geoLocation already accepted)'
22:17:23
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:17:24
> 
> 2. setWindowSize on 1680x989 OK 22:17:25
> 
> 3. click on id=fa-file-code-o OK 22:17:26
> 
> 4. click on linkText=Close OK 22:17:28
> 
> 5. click on id=fa-code OK 22:17:30
> 
> 6. click on linkText=Close OK 22:17:32
> 
> 7. click on id=fa-user OK 22:17:34
> 
> 8. click on css=#id05 div:nth-child(3) > .modal-link-text OK 22:17:36
> 
> 9. storeWindowHandle on root OK 22:17:38
> 
> 10. selectWindow on handle=${win2347} OK 22:17:39
> 
> 11. close OK 22:17:40
> 
> 12. selectWindow on handle=${root} OK 22:17:41
> 
> 13. click on linkText=Close OK 22:17:42
> 
> '006 - User - UC 3 - CSS Modals (geoLocation already accepted)' completed successfully

7. 007 - User - UC 4 - Contact (geoLocation already accepted)
Running '007 - User - UC 4 - Contact (geoLocation already accepted)'
22:17:50
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:17:51
> 
> 2. setWindowSize on 1680x989 OK 22:17:52
> 
> 3. click on id=fa-envelope-o OK 22:17:53
> 
> 4. click on id=fullname OK 22:17:55
> 
> 5. type on id=fullname with value User - UC 4 - Contact OK 22:17:57
> 
> 6. click on id=emailaddress OK 22:17:59
> 
> 7. type on id=emailaddress with value mobilecrusader@outlook.com OK 22:18:01
> 
> 8. click on id=feedback OK 22:18:03
> 
> 9. mouseOver on id=contactsubmit OK 22:18:05
> 
> 10. type on id=feedback with value Hello!\n\nI want to talk to you regarding the collection of data from a number of disparate data sources.\n\nKind regards,\n\nUser OK 22:18:07
> 
> 11. click on id=contactsubmit OK 22:18:09
> 
> 12. mouseOut on id=contactsubmit OK 22:18:11
> 
> 13. click on linkText=Close OK 22:18:13
> 
> 14. click on id=fa-user OK 22:18:15
> 
> 15. click on linkText=-> My Resumé. OK 22:18:17
> 
> 16. storeWindowHandle on root OK 22:18:19
> 
> 17. selectWindow on handle=${win712} OK 22:18:20
> 
> 18. click on css=.ui-menu-color-contact > .hvr-sweep-to-bottom OK 22:18:21
> 
> 19. click on linkText=naoise.gaff.gaffney@gmail.com OK 22:18:23
> 
> 20. close OK 22:18:25
> 
> 21. selectWindow on handle=${root} OK 22:18:26
> 
> 22. click on linkText=Close OK 22:18:27
> 
> '007 - User - UC 4 - Contact (geoLocation already accepted)' completed successfully
22:18:28

8. 008 - Collaborator - UC 5 - Contact (geoLocation already accepted)
Running '008 - Collaborator - UC 5 - Contact (geoLocation already accepted)'
22:18:34
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:18:35
> 
> 2. setWindowSize on 1680x989 OK 22:18:36
> 
> 3. click on id=fa-envelope-o OK 22:18:37
> 
> 4. click on id=feedback OK 22:18:39
> 
> 5. click on id=feedback OK 22:18:41
> 
> 6. type on id=feedback with value As a Collaborator, I want to work with the owner (Naoise Gaffney) so that we can provide Full Stack Development solutions for Clients to further their needs and our financial safety. OK 22:18:43
> 
> 7. click on id=fullname OK 22:18:45
> 
> 8. type on id=fullname with value Collaborator - UC 5 - Contact OK 22:18:47
> 
> 9. click on id=emailaddress OK 22:18:49
> 
> 10. type on id=emailaddress with value mobilecrusader@outlook.com OK 22:18:51
> 
> 11. click on id=feedback OK 22:18:53
> 
> 12. click on id=feedback OK 22:18:55
> 
> 13. type on id=feedback with value Hello,\n\nAs a Collaborator, I want to work with the owner (Naoise Gaffney) so that we can provide Full Stack Development solutions for Clients to further their needs and our financial safety.\n\nKind regards,\n\nC OK 22:18:57
> 
> 14. click on id=contactsubmit OK 22:18:59
> 
> 15. click on linkText=Close OK 22:19:01
> 
> 16. click on id=fa-user OK 22:19:03
> 
> 17. click on linkText=-> My Resumé. OK 22:19:05
> 
> 18. storeWindowHandle on root OK 22:19:07
> 
> 19. selectWindow on handle=${win149} OK 22:19:08
> 
> 20. click on css=.ui-menu-color-contact > .hvr-sweep-to-bottom OK 22:19:09
> 
> 21. click on linkText=naoise.gaff.gaffney@gmail.com OK 22:19:11
> 
> 22. close OK 22:19:13
> 
> 23. selectWindow on handle=${root} OK 22:19:14
> 
> 24. click on linkText=Close OK 22:19:15
> 
> '008 - Collaborator - UC 5 - Contact (geoLocation already accepted)' completed successfully

9. 009 - Collaborator - UC 6 - Overview and Statistics (geoLocation already accepted)
Running '009 - Collaborator - UC 6 - Overview and Statistics (geoLocation already accepted)'
22:19:21
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:19:22
> 
> 2. setWindowSize on 1680x989 OK 22:19:23
> 
> 3. click on css=#gmimap1 > area OK 22:19:24
> 
> 4. click on id=buttonOverAbbey Wood OK 22:19:26
> 
> 5. click on id=close OK 22:19:28
> 
> 6. click on css=#gmimap1 > area OK 22:19:30
> 
> 7. click on id=buttonStatsAbbey Wood OK 22:19:32
> 
> 8. click on id=close OK 22:19:34
> 
> '009 - Collaborator - UC 6 - Overview and Statistics (geoLocation already accepted)' completed successfully

10. 010 - Collaborator - UC 7 - GitHub Project II (geoLocation already accepted)
Running '010 - Collaborator - UC 7 - GitHub Project II (geoLocation already accepted)'
22:19:43
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:19:44
> 
> 2. setWindowSize on 1680x989 OK 22:19:45
> 
> 3. click on id=fa-user OK 22:19:46
> 
> 4. click on css=#id05 div:nth-child(3) > .modal-link-text OK 22:19:48
> 
> 5. storeWindowHandle on root OK 22:19:50
> 
> 6. selectWindow on handle=${win6452} OK 22:19:51
> 
> 7. click on id=32bb636196f91ed59d7a49190e26b42c-d2a1bc778f703141be895002cc1b35b847e0b598 OK 22:19:52
> 
> 8. runScript on window.scrollTo(0,0) OK 22:19:54
> 
> 9. click on id=d6c5855a62cf32a4dadbc2831f0f295f-bbcbeb1490bae2a2d66d7ddf436aabd432c6379f OK 22:19:56
> 
> 10. mouseOver on id=293da7def0580548cb86edf009307a58-9c63081daf0cfb3d69172790ffa73f830a2f109a OK 22:19:58
> 
> 11. mouseOver on id=293da7def0580548cb86edf009307a58-9c63081daf0cfb3d69172790ffa73f830a2f109a OK 22:20:00
> 
> 12. mouseOut on id=293da7def0580548cb86edf009307a58-9c63081daf0cfb3d69172790ffa73f830a2f109a OK 22:20:02
> 
> 13. click on id=cc1ed331d286a6a85ca3a4d165893127-8380b155a229c3cef691f86ab1f1da4d6d9b0a6d OK 22:20:04
> 
> 14. close OK 22:20:06
> 
> 15. selectWindow on handle=${root} OK 22:20:07
> 
> 16. click on linkText=Close OK 22:20:08
> 
> '010 - Collaborator - UC 7 - GitHub Project II (geoLocation already accepted)' completed successfully

11. 011 - Collaborator - UC 8 - Feedback Form (geoLocation already accepted)
Running '011 - Collaborator - UC 8 - Feedback Form (geoLocation already accepted)'
22:20:18
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:20:19
> 
> 2. setWindowSize on 1680x989 OK 22:20:20
> 
> 3. click on id=fa-envelope-o OK 22:20:21
> 
> 4. click on id=fullname OK 22:20:23
> 
> 5. type on id=fullname with value Collaborator - UC 8 - Feedback Form OK 22:20:25
> 
> 6. click on id=emailaddress OK 22:20:27
> 
> 7. type on id=emailaddress with value mobilecrusader@outlook.com OK 22:20:29
> 
> 8. click on id=feedback OK 22:20:31
> 
> 9. runScript on window.scrollTo(0,0) OK 22:20:33
> 
> 10. type on id=feedback with value Hello!\n\nAs a Collaborator, I want to contact the owner (Naoise Gaffney) to discuss the details of the potential for a collaboration so that I can plan the continued development of my business for my Clients.\n\nKind regards,\n\nC OK 22:20:35
> 
> 11. click on id=contactsubmit OK 22:20:37
> 
> 12. click on linkText=Close OK 22:20:39
> 
> '011 - Collaborator - UC 8 - Feedback Form (geoLocation already accepted)' completed successfully

12. 012 - Employer - UC 9 - Overview and Statistics (geoLocation already accepted)
Running '012 - Employer - UC 9 - Overview and Statistics (geoLocation already accepted)'
22:20:49
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:20:50
> 
> 2. setWindowSize on 1680x989 OK 22:20:51
> 
> 3. click on css=.maptype-control-satellite OK 22:20:52
> 
> 4. click on css=.zoom-control-out OK 22:20:54
> 
> 5. click on css=.zoom-control-out OK 22:20:56
> 
> 6. click on css=#gmimap9 > area OK 22:20:58
> 
> 7. click on id=buttonOverWarsaw OK 22:21:00
> 
> 8. click on id=close OK 22:21:02
> 
> 9. click on css=#gmimap9 > area OK 22:21:04
> 
> 10. click on id=buttonStatsWarsaw OK 22:21:06
> 
> 11. click on id=close OK 22:21:08
> 
> '012 - Employer - UC 9 - Overview and Statistics (geoLocation already accepted)' completed successfully

13. 013 - Employer - UC 10 - GitHub Project II (geoLocation already accepted)
Running '013 - Employer - UC 10 - GitHub Project II (geoLocation already accepted)'
22:23:55
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:23:56
> 
> 2. setWindowSize on 1680x989 OK 22:23:57
> 
> 3. click on id=fa-user OK 22:23:58
> 
> 4. click on css=#id05 div:nth-child(3) > .modal-link-text OK 22:24:00
> 
> 5. storeWindowHandle on root OK 22:24:02
> 
> 6. selectWindow on handle=${win4107} OK 22:24:03
> 
> 7. mouseOver on css=.commits > a OK 22:24:04
> 
> 8. click on id=32bb636196f91ed59d7a49190e26b42c-d2a1bc778f703141be895002cc1b35b847e0b598 OK 22:24:06
> 
> 9. click on id=d6c5855a62cf32a4dadbc2831f0f295f-bbcbeb1490bae2a2d66d7ddf436aabd432c6379f OK 22:24:08
> 
> 10. click on id=cc1ed331d286a6a85ca3a4d165893127-8380b155a229c3cef691f86ab1f1da4d6d9b0a6d OK 22:24:10
> 
> 11. close OK 22:24:12
> 
> 12. selectWindow on handle=${root} OK 22:24:13
> 
> 13. click on linkText=Close OK 22:24:14
> 
> '013 - Employer - UC 10 - GitHub Project II (geoLocation already accepted)' completed successfully

14. 014 - Employer - UC 11 - GitHub Project MarkDown Documents (geoLocation already accepted)
Running '014 - Employer - UC 11 - GitHub Project MarkDown Documents (geoLocation already accepted)'
22:24:25
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:24:26
> 
> 2. setWindowSize on 1680x989 OK 22:24:27
> 
> 3. click on id=fa-user OK 22:24:28
> 
> 4. click on css=#id05 div:nth-child(3) > .modal-link-text OK 22:24:30
> 
> 5. storeWindowHandle on root OK 22:24:32
> 
> 6. selectWindow on handle=${win4738} OK 22:24:33
> 
> 7. close OK 22:24:34
> 
> 8. selectWindow on handle=${root} OK 22:24:35
> 
> 9. click on linkText=Close OK 22:24:36
> 
> '014 - Employer - UC 11 - GitHub Project MarkDown Documents (geoLocation already accepted)' completed successfully

15. 015 - Employer - UC 12 - Feedback Form (geoLocation already accepted)
Running '015 - Employer - UC 12 - Feedback Form (geoLocation already accepted)'
22:24:46
> 1. open on https://naoisegaffney.github.io/CitiesInCountries/ OK 22:24:47
> 
> 2.  setWindowSize on 1680x989 OK 22:24:48
> 
> 3. click on id=fa-envelope-o OK 22:24:49
> 
> 4. click on id=feedback OK 22:24:51
> 
> 5. click on id=feedback OK 22:24:53
> 
> 6. click on id=feedback OK 22:24:55
> 
> 7. type on id=feedback with value Hello!\n\nAs an Employer, I want to contact the owner (Naoise Gaffney) to discuss the details of hiring or contracting him for design and development work.\n\nKind regards,\n\nE OK 22:24:57
> 
> 8. click on id=fullname OK 22:24:59
> 
> 9. type on id=fullname with value Employer - UC 12 - Feedback Form OK 22:25:01
> 
> 10. click on id=emailaddress OK 22:25:03
> 
> 11. type on id=emailaddress with value mobilecrusader@outlook.com OK 22:25:05
> 
> 12. click on id=contactsubmit OK 22:25:07
> 
> 13. click on linkText=Close OK 22:25:09
> 
> '015 - Employer - UC 12 - Feedback Form (geoLocation already accepted)' completed successfully
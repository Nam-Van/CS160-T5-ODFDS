# CS160-T5-ODFDS

CS160 - Frank Butt

## Project Description

The group project is designed for the students to learn the end-to-end software development process. This
assignment requires you to build a web-based application with emphasis in reusable components and infrastructures.

## Team 5 - On-Demand Food Delivery Service

**Problem statement** – A new bay area food delivery service, ODFDS, has begun to serve Santa Clara County. The
business will allow restaurants to request delivery of their take-out orders. ODFDS will match the nearest available driver
to the restaurant and dispatch him/her for pickup and delivery. ODFDS needs a system for sub-contracted drivers to
locate their next request for the food delivery. Require mapping, time-based traffic events, and location based searches to
guarantee the wait time to < 40 minutes from the time of request.
You are responsible to develop the IT infrastructure and website for both the restaurants and drivers. Restaurants can go
onto this website and request a delivery. The cost is based on distance and time (like how a taxi works) with a minimum
cost of $5 (first mile is free) with subsequent mile is $2/mile. The website will include logic to find the next closest
available driver based on real-time driving time to each restaurant request. Once it does, it will dispatch the drivers to the
restaurant location. Need to be able to track the driver and new customer request via Google map (or other mapping
services like MapBox). Should use map services to calculate driving distances with traffic and other information
included.
Special note: We use Google Map (or other mapping services like MapBox) for routing. Each driver can pick up 1-2
different orders from the same restaurant but not from different restaurants. If 2 orders are being dispatch from the same
restaurant to 2 different locations, the delivery cost of the 2nd order cannot be more than the cost of the original distance
from the restaurant to the customer address.

**Part I: Due Date: 2/23/23**
Project Requirement Document: 3-page minimum

1. Clearly defined problem statement
2. Proposed solutions with your project
3. Break down #1 and #2 above with details (e.g. scenarios, personas, flow diagrams, ... etc.)
   Architecture / High-level Design: 3-page minimum
4. Component architecture diagram
5. Features/component design list and descriptions
6. HW, SW, Tools, Frameworks, ... etc.

**Part II: Due Date: 3/2/23**
Low-level Design Document: 4-page minimum

1. Break down component design information from HLD into details
2. Logic can be represented in pseudo code
3. Important – you will likely need to do some research or prototyping of different technology prior to
   completing this task.
4. At the end, you must have a list of defined tasks in your “Backlog”
   High-level Test Plan: 3-page minimum
5. Must include test strategy, functional/component test descriptions (goals, expectations)
6. Test metrics including success criteria; tools and methodology to be use, ... etc.
7. Can peek at Chapter 9 for some examples.
8. Similar to the Test-driven-development strategy except we don’t need the actual test cases yet.

**Part III: Due Date: 5/1/23 & 5/3/23 (Final Project Presentation – 12 min each)**
Implementation, Packaging, and Process Documents

1. Completed project with all the sample/starter data and code packaged together (Docker image). If you
   run on a hosted website, document it in the User’s guide. Another team must be able to take your
   installation instructions and load/run it locally on their own laptop. If you have starting data (e.g. stored
   location, drivers, ...), make sure the “test” team or TA can load them prior to testing.
2. Required Documentation:

- Backlog history;
- Development meetings and scrum minutes (journal)
- User’s Guide (including a section on installation and configuration)
- Updated documents from Part I and II if designs and/or assumptions have changed.
- A how-to video for install/configure/customization/usage (should be 10-15 minutes in length)

**Part IV: Due Date: 5/8/23**
Black Box Testing - Another Team’s Project

1. Perform Black Box testing for another team’s project. Then fill in the Black Box Testing Document
   Template which includes a long check list of tasks and their status (To be provided).
2. Summarize your findings in a 3-page report.

## How to run?

1. Make sure you've cloned repo to device
2. cd to project folder
3. in terminal type: npm run dev
4. in another ternimal cd to project folder and then cd into demo folder
5. in that terminal, type: npm start

Note: you'll be taken to the localhost page of the react app apart of the demo.

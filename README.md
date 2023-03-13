# react-new-mail

- [DEMO LINK](https://svitlana-yudina.github.io/react-new-mail/)

This is a project for working with Nova Poshta.

Technologies:
React(create-react-app), react-hooks, react-router, custom hooks, react-context,
HTML, SCSS, TypeScript.

Used API: https://developers.novaposhta.ua/documentation

Description:
The user has the opportunity to choose one of two options:
1. View the list of warehouses.
2. Get the status of the parcel by the TTN number.

- At first, the user selects the area, then the city.
  Then he sees the number of found warehouses and their list.
- Each individual select sends a separate request 
  to get the data they need (region, city, list).
- If, after selecting a city, the user selects another area, 
  the city field is cleared.
- The user sees a corresponding message if there are no 
  Nova Poshta warehouses or parcel machines in the locality.


- On this page, the user can get information about 
  the parcel by entering the TTN number in the field or 
  by selecting from the history field.
- On submit, the correctness of entering the number is checked 
  (at the moment it should be just 14 digits). 
  And if the check fails, the user sees an error message and the request is not sent.
- If the number is entered in the correct format, a request is 
  sent and the user sees information about his parcel 
  (status, information about the sender and recipient - address 
  and date or planned delivery date if the parcel is on the way).
  - If the parcel number is not found in the Nova Poshta database, 
  the user will also see this.
- The history of viewing parcels is saved by LocalStorage 
  and is available even after a reloading the page.
- The numbers of the viewed parcels in the history are displayed 
  in the order of viewing. The number that was viewed last will be 
  displayed at the top of the list.
- If the user clicks on any number in the history, 
  a request with that number will be sent, the number will 
  move to the top of the list and be displayed in the input field.
- There is also a "clear history" button that clears the list 
  of viewed TTN numbers and deletes information from LocalStorage.



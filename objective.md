# Hostel Management Application



### Hostel Categories
1. Only Admin should be able to create hostel catagories.
2. Category name should be the only field.
3. It also has a creator name property, but we'll rarely use it.



### Hostels
1. Admin Should be able to create a new hostel but the general user cannot.
2. Only admin should be able to edit, delete a hostel.
2. Whenever a hostel is being created, created categories should be listed in the categories should be 		listed in a dropdown list.



### Rooms
1. Admin / Normal User should be able to create rooms.
2. When we create rooms a dropdown should appear denoting all hostels that are created for this owner.



### Tenant
1. When we create a tenant it should show all hostels in a dropdown and when we select a hostel all rooms should be displayed.
2. After selecting a room it should go through a process to know if the room has any empty beds. Most probably the non empty rooms should not be displayed. 
3. If there are any empty beds then the room should be alloted.
4. Tenant's id should be added to the room's tenant object.



### Payment
1. Owner should be able to record a payment by clicking on a user's payment button.
2. A new mongoose payment object will be created and after creation will be added to tenant's payments array.
3. Incase of trying to get all the payments, It should look for all the payments and show us all payments.



### User
1. User model should contain username and password and all the stuff according to yelp camp refactored and something called level, that tells if a user is an admin or not.
2. 


### View
1. There will be a single home page. It will have menu on the left and content on the right.
2. Introduce angular routing.
3. Now make links out of angular routing and sidebar.






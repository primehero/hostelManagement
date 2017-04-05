# Hostel Management Application



### Hostel Categories
1. Only Admin should be able to create hostel categories.
2. Category name should be the only field.
3. It also has a creator name property, but we'll rarely use it.


### Hostels
1. Admin Should be able to create a new hostel but the general user cannot.
2. Only admin should be able to edit, delete a hostel.
2. Whenever a hostel is being created, created categories should be listed in the categories should be 		listed in a drop down list.



### Rooms
1. Some one only can get rooms according to the hostel.
2. Hostel id will be sent as the req.query.hostel
3. A method on rooms will be called that gets the required rooms of the hostel



### Tenant
1. When we create a tenant it should show all hostels in a drop down and when we select a hostel all rooms should be displayed.
2. After selecting a room it should go through a process to know if the room has any empty beds. Most probably the non empty rooms should not be displayed.
3. If there are any empty beds then the room should be alloted.
4. Tenant's id should be added to the room's tenant object.



### Payment
1. Owner should be able to record a payment by clicking on a user's payment button.
2. A new mongoose payment object will be created and after creation will be added to tenant's payments array.
3. In case of trying to get all the payments, It should look for all the payments and show us all payments.



### User
1. User model should contain username and password and all the stuff according to yelp camp refactored and something called admin, this field is false for every single one of them except admin.
2. Admin will be able to create more users.


### Admin
1. The admin main page is empty with a few options.
2. Whenever he clicks on something, it should be redirected to particular page.

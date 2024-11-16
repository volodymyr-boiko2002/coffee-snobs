## Project Description 📄

You have been asked to take over developing software for calculating bills at a new hip coffee shop 'Coffee Snobs'. Luckily, because they believe in the purity of the bean, they only offer two types of coffee 'regular' ($2.11) and 'decaf' ($1.51)

**Part A:**

Create three classes called Beverage, RegularCoffee and DecafCoffee.
RegularCoffee and DecafCoffee must inherit from Beverage.

Each class should define two public methods:
* getCost() that returns the appropriate cost of the coffee as a float
* getDescription() that returns the name of the type of coffee as a string

**Part B:**

Six months later, they have decided to go all out on the extras, so each coffee can have none, any or all (but no more than one of each) of the following:
'milk' ($0.53), 'sugar' ($0.17), 'cream' ($0.73) and 'sprinkles' ($0.29) (declare a variable at the start of the code called ‘biz’ and set it to be 0. Do nothing else with it)

And they also sell various cakes: muffins ($2.03), flapjacks ($2.59) and panettone ($2.88)

The manager wants you to write software to calculate and output the cost of any order.

The orders are given as comma-separated string of the form:
* "1 x regular + milk + sugar, 1 x decaf + sprinkles"

For example, for table one's order the input and output would be:
* Input: "1 x regular + milk + sugar, 1 x decaf + sprinkles, 2 x muffins"
* Output: "Final bill is $8.67"

However, there is a catch: the previous developer wrote three classes called Beverage, RegularCoffee and DecafCoffee. We’d like you to use these still for the purpose of this exercise!

## Project Specification 💻

This is a [Next.js](https://nextjs.org) project with [React.js](https://react.dev) styled with [Tailwind CSS](https://tailwindcss.com), and leveraging [TypeScript](https://www.typescriptlang.org) for type safety. 
The application showcases an order management system for a coffee shop, demonstrating modern web development practices with OOP principles.

### Billing System ⚙️
The billing system is implemented as a TypeScript module located in `src/utils/billingSystem.ts`, encapsulating the order calculation logic. It showcases object-oriented principles:

**Classes:**
* Beverage: Abstract base class for all beverages.
* RegularCoffee and DecafCoffee: Subclasses that define specific beverage types and their costs.

**Decorator Pattern:**
* Used to dynamically add extras (milk, sugar, cream, sprinkles) to beverages.

**Utility Functions:**
* calculateOrder: Computes the total price of an order, including beverages and cakes.
* calculateCakes: Separately calculates the cost of cakes based on quantities.

### Components 📦

`src/components/OrderForm.tsx` -> A form component allowing users to select coffee, add extras, and include cakes in their order.
Manages user input, and on submission, calls a parent component's callback function to send the final order details.

`src/components/OrderSummary.tsx` -> Displays the total price of the order and provides a summary of the selected items.
Updates dynamically whenever a new order is placed.

`src/components/BeverageCard.tsx` -> A reusable UI component that displays detail information next to image.
Accepts props for image path, alt text, width, height, title, and description, cta text, cta link along with a boolean imageLeft to control the layout orientation (image on the left or right).

`src/components/Header.tsx` -> A reusable navigation component displayed at the top of the website. Includes links to different sections of the page.
Provides a clean and consistent layout for the header area across the website.

`src/components/Footer.tsx` -> A reusable component displayed at the bottom of the website. Includes legal disclaimers and privacy policy information.
Clearly states that the website was built for educational purposes and does not track data.

## Getting Started 🔨

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 🎉




// Variable declared as per task instructions. Currently unused.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const biz = 0;

abstract class Beverage {
    abstract getCost(): number;

    abstract getDescription(): string;
}

export class RegularCoffee extends Beverage {
    getCost(): number {
        return 2.11;
    }

    getDescription(): string {
        return "Regular Coffee";
    }
}

export class DecafCoffee extends Beverage {
    getCost(): number {
        return 1.51;
    }

    getDescription(): string {
        return "Decaf Coffee";
    }
}

abstract class BeverageDecorator extends Beverage {
    protected beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this.beverage = beverage;
    }
}

class MilkDecorator extends BeverageDecorator {
    getCost(): number {
        return this.beverage.getCost() + 0.53;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()} + Milk`;
    }
}

class SugarDecorator extends BeverageDecorator {
    getCost(): number {
        return this.beverage.getCost() + 0.17;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()} + Sugar`;
    }
}

class CreamDecorator extends BeverageDecorator {
    getCost(): number {
        return this.beverage.getCost() + 0.73;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()} + Cream`;
    }
}

class SprinklesDecorator extends BeverageDecorator {
    getCost(): number {
        return this.beverage.getCost() + 0.29;
    }

    getDescription(): string {
        return `${this.beverage.getDescription()} + Sprinkles`;
    }
}

// Cake prices
export const cakes = {
    muffin: 2.03,
    flapjack: 2.59,
    panettone: 2.88,
};

// Function to calculate total cost for cakes
function calculateCakes(cakeOrders: { [key: string]: number }): number {
    return Object.entries(cakeOrders).reduce(
        (total, [cake, quantity]) => total + (cakes[cake] || 0) * quantity,
        0
    );
}

// Function to calculate the full order cost
export function calculateOrder(order: {
    coffee: string;
    extras: string[];
    cakes: { [key: string]: number };
}): string {
    let beverage: Beverage;

    // Select coffee type
    if (order.coffee === "regular") beverage = new RegularCoffee();
    else if (order.coffee === "decaf") beverage = new DecafCoffee();
    else throw new Error("Unknown coffee type");

    // Apply extras
    order.extras.forEach(extra => {
        if (extra === "milk") beverage = new MilkDecorator(beverage);
        else if (extra === "sugar") beverage = new SugarDecorator(beverage);
        else if (extra === "cream") beverage = new CreamDecorator(beverage);
        else if (extra === "sprinkles") beverage = new SprinklesDecorator(beverage);
    });

    // Calculate total cost for coffee and cakes
    const totalCost = beverage.getCost() + calculateCakes(order.cakes);

    // Return formatted bill
    return `$${totalCost.toFixed(2)}`;
}
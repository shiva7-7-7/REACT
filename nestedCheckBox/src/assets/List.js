/**
 * Data structure representing a list of items with nested children.
 * Each item contains only id, name, and a children array.
 * Nesting depth is 2 to 3 levels. This is an expanded version.
 */
const nestedData = [
    {
        id: 100,
        name: "Root 1: Core System Infrastructure",
        isChecked: false,
        children: [ // Level 2
            {
                id: 101,
                name: "Module A: User Authentication Service",
                isChecked: false,
                children: [ // Level 3
                    { id: 1011, name: "Sub-Module A.1: Login Flow & OAuth", isChecked: false, children: [] },
                    { id: 1012, name: "Sub-Module A.2: Token Management & Refresh", isChecked: false, children: [] },
                    { id: 1013, name: "Sub-Module A.3: Password Reset Logic", isChecked: false, children: [] }
                ]
            },
            {
                id: 102,
                name: "Module B: High-Volume Data Processing",
                isChecked: false,
                children: [ // Level 3
                    { id: 1021, name: "Sub-Module B.1: ETL Service & Pipelines", isChecked: false, children: [] },
                    { id: 1022, name: "Sub-Module B.2: Data Validation Layer", isChecked: false, children: [] }
                ]
            },
            {
                id: 103,
                name: "Module C: Frontend Presentation",
                isChecked: false,
                children: [] // This branch stops at Level 2
            }
        ]
    },
    {
        id: 200,
        name: "Root 2: External Integrations",
        isChecked: false,
        children: [ // Level 2
            {
                id: 201,
                name: "Service D: Third-Party Reporting Engine",
                isChecked: false,
                children: [] // This branch stops at Level 2
            },
            {
                id: 202,
                name: "Service E: Payment Gateway Connector",
                isChecked: false,
                children: [ // Level 3
                    { id: 2021, name: "Sub-Module E.1: Transaction Logging", isChecked: false, children: [] },
                    { id: 2022, name: "Sub-Module E.2: Refund Processing", isChecked: false, children: [] }
                ]
            },
            {
                id: 203,
                name: "Service F: SMS & Email Notification Hub",
                isChecked: false,
                children: [ // Level 3
                    { id: 2031, name: "Sub-Module F.1: Email Templates and Service", isChecked: false, children: [] },
                    { id: 2032, name: "Sub-Module F.2: Mobile Push Gateway", isChecked: false, children: [] }
                ]
            }
        ]
    },
    {
        id: 300,
        name: "Root 3: Administration & Monitoring",
        isChecked: false,
        children: [ // Level 2
            {
                id: 301,
                name: "Module G: User Management (CRUD)",
                isChecked: false,
                children: [ // Level 3
                    { id: 3011, name: "Sub-Module G.1: Role-Based Access", isChecked: false, children: [] },
                    { id: 3012, name: "Sub-Module G.2: Audit Trail", isChecked: false, children: [] }
                ]
            },
            {
                id: 302,
                name: "Module H: System Health Dashboard",
                isChecked: false,
                children: [] // This branch stops at Level 2
            }
        ]
    },
    {
        id: 400,
        name: "Root 4: Development Utilities",
        isChecked: false,
        children: [] // This branch stops at Level 1
    }
];

export default nestedData
// Example of how to access nested data:
// console.log(nestedData[1].name); // -> "Root 2: External Services"
// console.log(nestedData[1].children[1].name); // -> "Service E: Payment Gateway Connector"
// console.log(nestedData[1].children[1].children[0].name); // -> "Sub-Module E.1: Transaction Logging"
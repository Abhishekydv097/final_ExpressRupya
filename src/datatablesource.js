export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "Leads",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "location",
    headerName: "Location",
    width: 180,
  },
  {
    field: "priority",
    headerName: "Priority",
    width: 90,
  },
  {
    field: "source",
    headerName: "Source",
    width: 180,
  },
  {
    field: "created",
    headerName: "Created-By",
    width: 100,
  },

  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    status: "active",
    email: "1snow@gmail.com",
    age: 35,
    location: "New York",
    priority: "High",
    source: "Referral",
    created: "John Doe",
  },
  // Additional dummy inputs
  {
    id: 2,
    username: "John",
    img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    status: "passive",
    email: "john@example.com",
    age: 28,
    location: "London",
    priority: "Medium",
    source: "Website",
    created: "Jane Smith",
  },
  {
    id: 3,
    username: "Emily",
    img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    status: "active",
    email: "emily@example.com",
    age: 42,
    location: "Paris",
    priority: "Low",
    source: "Advertisement",
    created: "David Johnson",
  },

  {
    id: 4,
    username: "Michael",
    img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    status: "active",
    email: "michael@example.com",
    age: 31,
    location: "San Francisco",
    priority: "High",
    source: "Social Media",
    created: "Sarah Thompson",
  },
  {
    id: 5,
    username: "Emma",
    img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    status: "passive",
    email: "emma@example.com",
    age: 39,
    location: "Berlin",
    priority: "Medium",
    source: "Referral",
    created: "Robert Davis",
  },
  {
    id: 6,
    username: "Olivia",
    img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    status: "active",
    email: "olivia@example.com",
    age: 24,
    location: "Tokyo",
    priority: "Low",
    source: "Website",
    created: "Sophia Wilson",
  },
  {
    id: 7,
    username: "William",
    img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    status: "passive",
    email: "william@example.com",
    age: 52,
    location: "Sydney",
    priority: "High",
    source: "Advertisement",
    created: "Ethan Anderson",
  },
  {
    id: 8,
    username: "Ava",
    img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    status: "active",
    email: "ava@example.com",
    age: 36,
    location: "Toronto",
    priority: "Medium",
    source: "Social Media",
    created: "Mia Martinez",
  },
  {
    id: 9,
    username: "James",
    img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    status: "passive",
    email: "james@example.com",
    age: 29,
    location: "Mumbai",
    priority: "Low",
    source: "Referral",
    created: "Liam Rodriguez",
  },
  {
    id: 10,
    username: "Sophia",
    img: "https://w7.pngwing.com/pngs/340/946/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png",
    status: "active",
    email: "sophia@example.com",
    age: 41,
    location: "Mexico City",
    priority: "High",
    source: "Website",
    created: "Isabella Lee",
  },

];
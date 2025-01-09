import DropdownComponent from "./assets/Component/DropdownComponent";
import PopoverComponent from "./assets/Component/PopoverComponent";
import CardComponent from "./assets/Component/CardComoponent";
import RecentSalesComponent from "./assets/Component/RecentSalesComponent";
import AvatarButtonComponent from "./assets/Component/AvatarButtonComponent";
import Search from "./assets/Component/SearchComonent";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { LightningBoltIcon } from "@radix-ui/react-icons";
import { PersonIcon } from "@radix-ui/react-icons";
import { CardStackIcon } from "@radix-ui/react-icons";
import { OverviewComponent } from "./Overview";

export default function App() {
  const cardInfo = {
    cardOne: {
      title: "Total Revenue",
      sum: "$45,231.89",
      profit: "+20.1% from last month",
    },
    cardTwo: {
      title: "Subscriptions",
      sum: "+2350",
      profit: "+180.1% from last month",
    },
    cardThree: {
      title: "Sales",
      sum: "+12,234",
      profit: "+19% from last month",
    },
    cardFour: {
      title: "Active Now",
      sum: "+573",
      profit: "+201 since last hour",
    },
  };

  const profiles = {
    names: {
      profileOne: {
        name: "Oliva Martin",
        email: "olivia.martin@email.com",
        image: "src\\assets\\Images\\characterOne.png",
        spent: "+$1,999.00",
      },
      profileTwo: {
        name: "Jackson Lee",
        email: "jackson.Lee@email.com",
        image: "src\\assets\\Images\\characterTwo.png",
        spent: "+$39.00",
      },
      profileThree: {
        name: "Isabella Nguyen",
        email: "isabella.nguyen@email.com",
        image: "src\\assets\\Images\\characterThree.png",
        spent: "+$299.00",
      },
      profileFour: {
        name: "William Kim",
        email: "will@email.com",
        image: "src\\assets\\Images\\characterFour.png",
        spent: "+$99.00",
      },
      profileFive: {
        name: "Sofia Davis",
        email: "sofia.davis@email.com",
        image: "src\\assets\\Images\\characterFive.png",
        spent: "+$39.00",
      },
      accountUser: {
        name: "Alicia Koch",
      },
    },
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center p-10">
        <div
          id="topNav"
          className="flex flex-row justify-between items-center w-10/12 p-3 border-solid-gray-200 border-t-2 border-l-2 border-r-2 rounded-t-md"
        >
          <div id="leftSide" className="flex flex-row gap-5">
            <DropdownComponent profile={profiles.names.accountUser.name} />
            <button>Overview</button>
            <button className="text-gray-500 hover:text-black">
              Constumers
            </button>
            <button className="text-gray-500 hover:text-black">Products</button>
            <button className="text-gray-500 hover:text-black">Settings</button>
          </div>

          <div id="RightSide" className="flex gap-2 items-center">
            <Search />
            <AvatarButtonComponent
              personImages={profiles.names.profileOne.image}
            />
          </div>
        </div>

        <div
          id="container"
          className=" flex flex-col justify-between w-10/12 p-8 border-2 border-solid-gray-200 gap-5 rounded-b-md"
        >
          <div className="flex flex-row justify-between">
            <h1 className="text-3xl font-bold py-2">Dashboard</h1>
            <button className="flex items-center h-8 text-white bg-black px-4 rounded-md">
              Download
            </button>
          </div>
          <div className="flex flex-row w-1/4 justify-between py-1 px-2 rounded-md bg-gray-100">
            <button className="bg-white px-2 py-1 rounded-md shadow-md">
              Overview
            </button>
            <button className="bg-none text-gray-500">Analytics</button>
            <button className="bg-none text-gray-500">Reports</button>
            <button className="bg-none text-gray-500">Notifications</button>
          </div>

          <div
            id="cards"
            className="flex flex-row w-full justify-between gap-5"
          >
            <CardComponent
              title={cardInfo.cardOne.title}
              sum={cardInfo.cardOne.sum}
              profit={cardInfo.cardOne.profit}
            />
            <CardComponent
              title={cardInfo.cardTwo.title}
              sum={cardInfo.cardTwo.sum}
              profit={cardInfo.cardTwo.profit}
            />
            <CardComponent
              title={cardInfo.cardThree.title}
              sum={cardInfo.cardThree.sum}
              profit={cardInfo.cardThree.profit}
            />
            <CardComponent
              title={cardInfo.cardFour.title}
              sum={cardInfo.cardFour.sum}
              profit={cardInfo.cardFour.profit}
            />
          </div>

          <div
            id="charts"
            className="flex flex-row text-black font-semibold w-full gap-5"
          >
            <div className="flex flex-col w-3/5 p-5 border-2 border-solid border-gray-200 rounded-xl">
              <h1 className="pl-5 pb-5">Overview</h1>
              <OverviewComponent />
            </div>
            <div className="flex flex-col p-5 w-2/5 justify-between border-2 border-solid border-gray-200 rounded-xl">
              <div className="p-3">
                <h1>Recent Sales</h1>
                <p className="text-gray-400 font-normal">
                  You made 265 sales this month.
                </p>
              </div>
              <RecentSalesComponent
                personName={profiles.names.profileOne.name}
                personEmail={profiles.names.profileOne.email}
                personImages={profiles.names.profileOne.image}
                personSales={profiles.names.profileOne.spent}
              />
              <RecentSalesComponent
                personName={profiles.names.profileTwo.name}
                personEmail={profiles.names.profileTwo.email}
                personImages={profiles.names.profileTwo.image}
                personSales={profiles.names.profileTwo.spent}
              />
              <RecentSalesComponent
                personName={profiles.names.profileThree.name}
                personEmail={profiles.names.profileThree.email}
                personImages={profiles.names.profileThree.image}
                personSales={profiles.names.profileThree.spent}
              />
              <RecentSalesComponent
                personName={profiles.names.profileFour.name}
                personEmail={profiles.names.profileFour.email}
                personImages={profiles.names.profileFour.image}
                personSales={profiles.names.profileFour.spent}
              />
              <RecentSalesComponent
                personName={profiles.names.profileFive.name}
                personEmail={profiles.names.profileFive.email}
                personImages={profiles.names.profileFive.image}
                personSales={profiles.names.profileFive.spent}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

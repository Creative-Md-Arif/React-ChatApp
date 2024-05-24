import Group from "../components/homeItems/Group/Group";
import BlockList from "../components/homeItems/blocklist/BlockList";
import FriendRequest from "../components/homeItems/friendRequest/FriendRequest";
import Friends from "../components/homeItems/friends/Friends";
import MyGroup from "../components/homeItems/myGroup/MyGroup";
import People from "../components/homeItems/people/People";

const Home = () => {
  return (
    <div className="w-full h-screen">
      <div className="flex items-center gap-4 p-4">
        <MyGroup />
        <Group />
        <Friends />
      </div>
      <div className="flex items-center gap-4 p-4">
        <People/>
        <FriendRequest/>
        <BlockList/>
      </div>
    </div>
  );
};

export default Home;

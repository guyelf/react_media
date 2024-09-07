import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import useThunk from "../hooks/use-thunk";
import { Fragment } from "react";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";

export default function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };
  const header = <Fragment>
    <Button loading={isLoading} onClick={handleClick} className='mr-3'>
        <GoTrashcan />
    </Button>
      {error && <div>Error deleting user</div>}
      {user.name}
  </Fragment>
  return (
    <ExpandablePanel header={header}><AlbumsList user={user}/></ExpandablePanel>
  );
}

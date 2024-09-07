import { useAddPhotoMutation, useFetchPhotosQuery } from "../store";
import Button from "./Button";
import PhotoListItem from "./PhotoListItem";
import Skeleton from "./Skeleton";

export default function PhotoList({ album }) {
    const {data, isFetching, error} = useFetchPhotosQuery(album);
  console.log(useFetchPhotosQuery(album));
  const [addPhoto, addPhotoResults] = useAddPhotoMutation();

  const handleAddPhoto = () => {
    // Album of the class!
    addPhoto(album);
  };

  let content;
    if (isFetching) {
      content = <Skeleton className='h-8 w-8' times={4}></Skeleton>;
    } else if (error) {
      content = <div>Error fetching photos...</div>;
    } else {
      content = data.map((photo) => {
        return <PhotoListItem key={photo.id} photo={photo} />;
      });
    }

  return (
    <div>
      <div className='m-2 flex flex-row items-center justify-between'>
        <h3 className='text-lg font-bold'>Photos in {album.title}</h3>
        <Button loading={addPhotoResults.isLoading} onClick={handleAddPhoto}>
          + Add Photo
        </Button>
      </div>
      <div className='mx-8 flex flex-row flex-wrap justify-center'>
        {content}
      </div>
    </div>
  );
}

import React from 'react'
import useGenres, {Genre} from "../hooks/useGenres";
import {
    HStack,
    List,
    ListItem,
    Image,

    Spinner,
    Button
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ( { onSelectGenre } : Props) => {
    const {data, isLoading} = useGenres();

    if(isLoading) return <Spinner></Spinner>

    return (
        <List>
            {data.map(genre =>
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} src={getCroppedImageUrl(genre.image_background)}/>
                        <Button onClick={() => onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
                    </HStack>
            </ListItem>)}
        </List>
    )
}
export default GenreList

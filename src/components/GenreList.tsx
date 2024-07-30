import React from 'react'
import useGenres, {Genre} from "../hooks/useGenres";
import {
    HStack,
    List,
    ListItem,
    Image,
    Spinner,
    Button, Heading, Box
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null
}

const GenreList = ( { onSelectGenre, selectedGenre } : Props) => {
    const {data, isLoading} = useGenres();

    if(isLoading) return <Spinner></Spinner>

    return (
        <Box marginLeft={3}>
            <Heading marginY={5} fontSize='2xl' >Genres</Heading>
            <List>
                {data.map(genre =>
                    <ListItem key={genre.id} paddingY='5px'>
                        <HStack>
                            <Image boxSize='32px' borderRadius={8} objectFit='cover' src={getCroppedImageUrl(genre.image_background)}/>
                            <Button textAlign='left' whiteSpace='normal' fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
                        </HStack>
                </ListItem>)}
            </List>
        </Box>
    )
}
export default GenreList

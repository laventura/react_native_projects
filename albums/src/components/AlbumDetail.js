// 1 - Import libraries to make component
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// prop 'album' consumed here; 


const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;       // destructure
    const { thumbnailStyle, 
        headerContentStyle,
        thumbnailContainerStyle,
        headerTextStyle,
        imageStyle
    } = styles; // destructure

    return (
        // 1a - thumbnail Image
        // 1b - Album Info + Artist info
        // 2 - Album Cover art
        // 3 - BUY button 
        <Card>
            <CardSection> 
                <View style={thumbnailContainerStyle}>
                    <Image 
                        style={thumbnailStyle}
                        source={{ uri: thumbnail_image }} 
                    />
                </View>

                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image 
                    style={imageStyle}
                    source={{ uri: image }} 
                />
            </CardSection>

            <CardSection>
                <Button buttonPress={() => Linking.openURL(url)}>
                    Buy Album
                </Button>
            </CardSection>
            
        </Card>
        // 'buttonPress' is the prop/methodname that is called when Button pressed
    );
};

// Styling
const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'  // for text
    },
    headerTextStyle: {      // for album header
        fontSize:   20,
        fontStyle:  'italic'
    },
    thumbnailStyle: {   // for image
        height: 50,
        width:  50
    }, 
    thumbnailContainerStyle: {
        justifyContent:     'center',
        alignItems:         'center',
        marginLeft:         10,
        marginRight:        10
    },
    imageStyle: {
        height: 300,        // fixed height
        flex:   1,          // trick to get width to be 100% avail
        width:  null
    }

};

// export 
export default AlbumDetail;

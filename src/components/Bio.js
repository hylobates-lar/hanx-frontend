import React from 'react';
import { Row, Card, Col, Typography, Carousel, List, Divider } from 'antd';

class Bio extends React.Component {

    render () {
        return (
            <>
            <Row id="bio-content" gutter={30}>
                <Col xs={24} md={8} offset={1} >
                    <Carousel style={{paddingTop: '12px'}} autoplay={true} adaptiveHeight={true}>
                        <div>
                            <img src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-17205-20121120-tom-hanks-1169-624x420-1353452177.jpg?resize=1800,1200&w=1200" alt="T.Hanks"/>
                        </div>
                        <div>
                            <img src="https://pbs.twimg.com/profile_images/1193951507026075648/Ot3GmqGK_400x400.jpg" alt="T.Hanks"/>
                        </div>
                        <div>
                            <img src="https://static01.nyt.com/images/2019/11/17/arts/17tom-hanks6/17tom-hanks6-mobileMasterAt3x.jpg" alt="T.Hanks"/>
                        </div>
                        <div>
                            <img src="https://www.myagecalculator.com/images/tom-hanks.jpg" alt="T.Hanks"/>
                        </div>
                        <div>
                            <img src="https://vignette.wikia.nocookie.net/dreamworks/images/c/cc/62982_v9_bb.jpg/revision/latest?cb=20181117225719" alt="T.Hanks"/>
                        </div>
                        <div>
                            <img src= "https://bloody-disgusting.com/wp-content/uploads/2019/11/Tales-from-the-Crypt-Cryptkeeper-Tom-Hanks.jpg" alt="T.Hanks" />
                        </div>
                        <div>
                            <img src= "https://pbs.twimg.com/media/D7QFrpcUcAULYI3.jpg" alt="T.Hanks" />
                        </div>
                        <div>
                            <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/15/31/980x491/gallery-1438274306-gettyimages-93409065.jpg?resize=480:*" alt="T.Hanks" />
                        </div>
                    </Carousel>
                </Col>
                <Col xs={24} md={14}>
                <div>
                    <Typography.Title >Welcome to HANX!</Typography.Title>
                    <Typography.Title level={3} >Gifted actor. National treasure. All around great guy.</Typography.Title>
                    <Divider />
                    <p>Thomas Jeffrey Hanks (born July 9, 1956) is an American actor and filmmaker. Hanks is known for his comedic and dramatic roles in such films as Splash (1984), Bachelor Party (1984), Big (1988), Turner & Hooch (1989), A League of Their Own (1992), Sleepless in Seattle (1993), Forrest Gump (1994), Apollo 13 (1995), You've Got Mail (1998), The Green Mile (1999), Cast Away (2000), Road to Perdition (2002), Cloud Atlas (2012), Captain Phillips (2013), Saving Mr. Banks (2013), Sully (2016), and A Beautiful Day in the Neighborhood (2019). He has also starred in the Robert Langdon films, and he voices Sheriff Woody in the Toy Story film series. He is one of the most popular and recognizable film stars worldwide, and is widely regarded as an American cultural icon.</p>
                    
                    <p>Hanks has collaborated with film director Steven Spielberg on five films to date: Saving Private Ryan (1998), Catch Me If You Can (2002), The Terminal (2004), Bridge of Spies (2015), and The Post (2017), as well as the 2001 miniseries Band of Brothers, which launched Hanks as a successful director, producer, and screenwriter. In 2010, Spielberg and Hanks were executive producers on the HBO miniseries The Pacific.</p>
                    
                    <p>Hanks' films have grossed more than $4.9 billion at U.S. and Canadian box offices and more than $9.96 billion worldwide, making him the fifth-highest-grossing actor in North America. His awards include a Golden Globe Award and an Academy Award for his role in Philadelphia (1993), as well as a Golden Globe Award, an Academy Award, a Screen Actors Guild Award, and a People's Choice Award for Forrest Gump (1994). Hanks is one of only two actors to win the Academy Award for Best Actor in consecutive years, Spencer Tracy being the other. In 2004, he received the Stanley Kubrick Britannia Award for Excellence in Film from the British Academy of Film and Television Arts (BAFTA). In 2014, he received a Kennedy Center Honor, and in 2016, he received a Presidential Medal of Freedom from President Barack Obama, as well as the French Legion of Honor.</p>
                </div>
                </Col>
            </Row>
            <Row style={{marginBottom: '4em'}}>
                <Col xs={{span: 16, offset: 4}}>
                    <Card title="Fun Facts!" headStyle={{backgroundColor: '#20B2AA'}}>
                        <List>
                            <List.Item title="List One">He is a third cousin, four times removed, of former U.S. President Abraham Lincoln. Their common ancestors were John Hanks (1680 - 1740) and his wife, Catherine, who were the great-great-grandparents of Lincoln, and the six times great-grandparents of Tom Hanks. Tom Hanks is also a seventh cousin, once removed, of actor George Clooney (Catherine and John Hanks were the seven times great-grandparents of Clooney).</List.Item>
                            <List.Item title="List two">In three of his movies, he has a scene where he is stranded at sea: Splash (1984), Joe Versus the Volcano (1990), and Cast Away (2000).</List.Item>
                            <List.Item title="List three">Has often done films which (comically) use urinating/using the bathroom as a plot device (e.g. The Green Mile (1999), Apollo 13 (1995), Forrest Gump (1994), A League of Their Own (1992) and Dragnet (1987)).</List.Item>
                            <List.Item title="List four">His daughter Elizabeth Hanks appears in the movie, Forrest Gump (1994), as the girl on the school bus who refuses to let young Forrest Gump (Michael Conner Humphreys) sit next to her.</List.Item>
                            <List.Item title="List four">He often meets children in random places such as elevators who don't understand how he is "Woody" from Toy Story, but he makes them close their eyes so he can perform the voice, to their enjoyment.</List.Item>
                            <List.Item title="List four">Distant cousin of Walt Disney, who he portrayed in Saving Mr. Banks (2013).</List.Item>
                            <List.Item title="List four">According to the family genealogy website Ancestry, Tom and Fred Rogers are sixth cousins and share the same great-great-great-great-great grandfather, Johannes Mefford.</List.Item>
                            <List.Item title="List four">His top five all-time favorite films are 2001: A Space Odyssey (1968), The Godfather (1972), Fargo (1996), Elephant (2003) and Boogie Nights (1997), with Stanley Kubrick's film holding the top ranking.</List.Item>
                            <List.Item title="List four">In an interview with NPR, Hanks reflected on his first Oscar nomination for Big (1988). He claimed that up until that time, he never considered himself an actor, per se, but rather a comical performer who appeared in movies. He said he took that nomination as validation from others that maybe he actually knew what he was doing. He further said that because of that movie, he began making a conscious decision to take more serious roles, and that he sort of attributes much of the success of the second half of his career to that one event.</List.Item>
                        </List>
                    </Card>
                </Col>
            </Row>
            </>
        )
    }
}

export default Bio;
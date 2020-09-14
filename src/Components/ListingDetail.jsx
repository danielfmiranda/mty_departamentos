import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Dialog} from 'primereact/dialog';
import {Button} from 'primereact/button'
import {Galleria} from 'primereact/galleria';
import '../Css/ListingDetail.css'

class ListingDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            images: [
                {
                    alt: 'Image',
                    imageUrl: 'https://photos.zillowstatic.com/cc_ft_768/ISzzxxnbdcqdvr1000000000.jpg'
                },
                {
                    alt: 'Image',
                    imageUrl: 'https://photos.zillowstatic.com/cc_ft_768/ISvwg7swl3djyr1000000000.jpg'
                },
                {
                    alt: 'Image',
                    imageUrl: 'https://photos.zillowstatic.com/cc_ft_768/ISjvjnp8apyxns1000000000.jpg'
                },
                {
                    alt: 'Image',
                    imageUrl: 'https://photos.zillowstatic.com/cc_ft_768/ISfkcjrjdnwoyr1000000000.jpg'
                },
                //
                {
                    alt: 'Image',
                    imageUrl: 'https://photos.zillowstatic.com/cc_ft_768/ISvgctllfcwjgs1000000000.jpg'
                },
                {
                    alt: 'Image',
                    imageUrl: 'https://photos.zillowstatic.com/cc_ft_768/ISvwg7swl3djyr1000000000.jpg'
                },
                {
                    alt: 'Image',
                    imageUrl: 'https://photos.zillowstatic.com/cc_ft_768/ISvgctllfcwjgs1000000000.jpg'
                },

            ]
        };

        this.itemTemplate = this.itemTemplate.bind(this);
        this.thumbnailTemplate = this.thumbnailTemplate.bind(this);
        this.onItemChange = this.onItemChange.bind(this);


        this.responsiveOptions = [
            {
                breakpoint: '1024px',
                numVisible: 5
            },
            {
                breakpoint: '768px',
                numVisible: 3
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];

        this.responsiveOptions2 = [
            {
                breakpoint: '1500px',
                numVisible: 5
            },
            {
                breakpoint: '1024px',
                numVisible: 3
            },
            {
                breakpoint: '768px',
                numVisible: 2
            },
            {
                breakpoint: '560px',
                numVisible: 1
            }
        ];
    }

    onItemChange(event) {
        this.setState({activeIndex: event.index});
    }

    itemTemplate(item) {
        return <img src={item.imageUrl} alt={item.alt} style={{width: '100%', display: 'block'}}/>;
    }

    thumbnailTemplate(item) {
        return <img src={item.thumbnailImageSrc} alt={item.alt} style={{display: 'block'}}/>;
    }

    render() {


        return (
            <div>
                <Dialog
                    // visible={true}
                    visible={this.props.isDetailModalActive}
                    className={'listingDetailContainer'}
                    onHide={this.props.closeDetailModal}>
                    <div className="p-grid pageContentsContainer">
                        <div className=" p-xl-7 p-lg-7 p-md-5 p-sm-12 listingDetailsPhotoContainer">
                            <div className={'p-grid'}>
                                <div className=" p-xl-12 p-lg-12 p-md-12 p-sm-12 imageContainer">
                                    <img alt="Card"
                                         src={'https://photos.zillowstatic.com/cc_ft_768/ISzzxxnbdcqdvr1000000000.jpg'}
                                         onClick={() => this.galleria2.show()}/>
                                </div>
                                <div className=" p-xl-6 p-lg-6 p-md-12 p-sm-6 imageContainer">
                                    <img alt="Card"
                                         src={'https://photos.zillowstatic.com/cc_ft_768/ISvwg7swl3djyr1000000000.jpg'}
                                         onClick={() => this.galleria2.show()}/>

                                </div>
                                <div className=" p-xl-6 p-lg-6 p-md-12 p-sm-6 imageContainer">
                                    <img alt="Card"
                                         src={'https://photos.zillowstatic.com/cc_ft_768/ISjvjnp8apyxns1000000000.jpg'}
                                         onClick={() => this.galleria2.show()}/>

                                </div>

                                <div className=" p-xl-6 p-lg-6 p-md-12 p-sm-6 imageContainer">
                                    <img alt="Card"
                                         src={'https://photos.zillowstatic.com/cc_ft_768/ISfkcjrjdnwoyr1000000000.jpg'}
                                         onClick={() => this.galleria2.show()}/>

                                </div>
                                <div className=" p-xl-6 p-lg-6 p-md-12 p-sm-6 imageContainer">
                                    <img alt="Card"
                                         src={'https://photos.zillowstatic.com/cc_ft_768/IS7ea79d9foryr1000000000.jpg'}
                                         onClick={() => this.galleria2.show()}/>
                                </div>
                                <div className=" p-xl-6 p-lg-6 p-md-12 p-sm-6 imageContainer">
                                    <img alt="Card"
                                         src={'https://photos.zillowstatic.com/cc_ft_768/ISfgl3uc2t9sis1000000000.jpg'}
                                         onClick={() => this.galleria2.show()}/>
                                </div>
                                <div className=" p-xl-6 p-lg-6 p-md-12 p-sm-6 imageContainer">
                                    <img alt="Card"
                                         src={'https://photos.zillowstatic.com/cc_ft_768/ISvgctllfcwjgs1000000000.jpg'}
                                         onClick={() => this.galleria2.show()}/>
                                </div>

                            </div>
                        </div>
                        <div className=" p-xl-5 p-lg-5 p-md-7 p-sm-12 listingDetailsAndContactContainer">
                            <h1> Avalon Dublin Stations </h1>
                            <p> 5200 Iron Horse Parkway, Dublin, CA, 94568 </p>

                            <h2> $2490/mo | 767sq.ft</h2>
                            <div className={'mainButtonContainer'}>
                                <Button label={'Contact'}/>
                                <Button label={'Website'}/>
                            </div>
                            <h2> About This Property</h2>
                            <div className={'aboutThisProperty'}>
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown
                                    printer took a galley of type and scrambled it to make a type specimen book. It has
                                    survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of
                                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                    publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                            </div>

                            <p><b> Pets: </b> Yes </p>
                            <p><b> Parking: </b> Yes </p>
                            <p><b> Outdoors: </b> Yes </p>


                        </div>
                    </div>
                </Dialog>
                <Galleria ref={(el) => this.galleria2 = el} value={this.state.images}
                          responsiveOptions={this.responsiveOptions} numVisible={7} style={{maxWidth: '850px'}}
                          circular fullScreen showItemNavigators showThumbnails={false} item={this.itemTemplate}
                          thumbnail={this.thumbnailTemplate}/>

            </div>

        );
    }
}

ListingDetail.propTypes = {};

export default ListingDetail;

import React from 'react';
import { Helmet } from 'react-helmet';
import Contacts from '../../Contacts/Contacts';
import Reviews from '../../Reviews/Reviews/Reviews';
import FindUs from '../FindUs/FindUs';
import HomeServices from '../HomeServices/HomeServices';
import Notify from '../Notify/Notify';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home -| Rent A Car</title>
            </Helmet>
            <HomeServices></HomeServices>
            <Notify></Notify>
            <Reviews></Reviews>
            <FindUs></FindUs>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;
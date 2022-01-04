import {
    Link
} from 'react-router-dom';
import {Helmet} from 'react-helmet';

import './index.css';

import Icon from '@mdi/react'
import { mdiMap } from '@mdi/js';

import rawMapData from '../../data/maps.json';

function Maps() {
    return [
        <Helmet
            key = {'loot-tier-helmet'}
        >
            <meta
                charSet='utf-8'
            />
            <title>
                Escape from Tarkov Maps
            </title>
            <meta
                name = 'description'
                content = 'Escape from Tarkov Maps'
            />
        </Helmet>,
        <div
            className = {'page-wrapper'}
            key = 'map-page-wrapper'
        >
            <h1
                className = 'center-title'
            >
                <Icon
                    path={mdiMap}
                    size={1.5}
                    className = 'icon-with-text'
                />
                Escape from Tarkov Maps
            </h1>
            <div
                className = 'maps-wrapper'
            >
                {
                    rawMapData.map((map) => {
                        const { displayText, key } = map;
                        return <div
                            className = 'map-wrapper'
                            key = {`map-wrapper-${key}`}
                        >
                            <h2>
                                {displayText}
                            </h2>
                            <Link
                                to = {`/map/${key}`}
                            >
                                <img
                                    alt = {`Map of ${ displayText }`}
                                    className = 'map-image'
                                    loading='lazy'
                                    title = {`Map of ${ displayText }`}
                                    src = {`${ process.env.PUBLIC_URL }/maps/${key}.jpg`}
                                />
                        </Link>
                        </div>;
                    })
                }
            </div>
        </div>
    ];
};

export default Maps;

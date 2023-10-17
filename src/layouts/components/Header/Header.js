import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faUser } from '@fortawesome/free-regular-svg-icons';
import { LuKeyboard } from 'react-icons/lu';
import { BsCoin, BsQuestionCircle } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';
import { GrLanguage } from 'react-icons/gr';
import { faPlus, faEllipsisVertical, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Button from '~/components/Button/Button';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react/';
import 'tippy.js/dist/tippy.css';
import config from '~/config';
import Menu from '~/components/Popper/Menu/Menu';
import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons/Icons';
import Image from '~/components/Image/Image';
import Search from '../Search/Search';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <GrLanguage />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng việt',
                },
            ],
        },
    },
    {
        icon: <BsQuestionCircle />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <LuKeyboard />,
        title: 'Keyboard shortcut',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };
    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/feedback',
        },
        {
            icon: <BsCoin />,
            title: 'Getcoin',
            to: '/feedback',
        },

        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorite',
            to: '/feedback',
        },
        ...MENU_ITEMS,
        {
            icon: <FiSettings />,
            title: 'Setting',
            to: '/feedback',
        },
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/feedback',
            seperate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className="logo-link">
                        <img src={images.logo} alt="tiktok" />
                    </Link>
                </div>
                <Search />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={(0, 200)} content="Upload video">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button upload>
                                <FontAwesomeIcon className={cx('plus-icon')} icon={faPlus} />
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/4a77b49591328762c9c038f3608416c0~c5_720x720.jpeg?x-expires=1696863600&x-signature=nRBYOg3icfWhQQHRCKBapPwcON0%3D"
                                alt="avt"
                                fallBack="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
                <div />
            </div>
        </header>
    );
}

export default Header;

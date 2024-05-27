import classNames from 'classnames'
import React from 'react'

interface IProps {
    type?: 'fork' | 'trash'
}
function DeleteIconBtn(props: IProps & React.SVGProps<SVGSVGElement>) {
    const type = props?.type || 'fork'
    return (
        <svg
            {...props}
            className={classNames(props.className, 'icon-btn')}
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            {type === 'fork' ? (
                <>
                    {' '}
                    <path
                        d="M4.55835 4.51263L9.11678 9.07106L4.55835 13.6295"
                        stroke="#555555"
                        strokeWidth="1.6"
                    />
                    <path
                        d="M13.5835 4.51263L9.02507 9.07106L13.5835 13.6295"
                        stroke="#555555"
                        strokeWidth="1.6"
                    />
                </>
            ) : (
                <>
                    <path
                        d="M8.79956 7.52002H10.0796V17.76H8.79956V7.52002Z"
                        fill="#555555"
                    />
                    <path
                        d="M11.3594 7.52002H12.6394V17.76H11.3594V7.52002Z"
                        fill="#555555"
                    />
                    <path
                        d="M13.9207 7.52002H15.2007V17.76H13.9207V7.52002Z"
                        fill="#555555"
                    />
                    <path
                        d="M3.67969 3.67999H20.3197V4.95999H3.67969V3.67999Z"
                        fill="#555555"
                    />
                    <path
                        d="M15.1996 3.68H13.9196V3.04C13.9196 2.656 13.6636 2.4 13.2796 2.4H10.7196C10.3356 2.4 10.0796 2.656 10.0796 3.04V3.68H8.79956V3.04C8.79956 1.952 9.63156 1.12 10.7196 1.12H13.2796C14.3676 1.12 15.1996 1.952 15.1996 3.04V3.68Z"
                        fill="#555555"
                    />
                    <path
                        d="M15.8397 21.6H8.15972C7.13572 21.6 6.23972 20.768 6.11172 19.744L4.95972 4.38398L6.23972 4.25598L7.39172 19.616C7.39172 20 7.77572 20.32 8.15972 20.32H15.8397C16.2237 20.32 16.5437 20 16.6077 19.616L17.7597 4.25598L19.0397 4.38398L17.8877 19.744C17.7597 20.768 16.8637 21.6 15.8397 21.6Z"
                        fill="#555555"
                    />
                </>
            )}
        </svg>
    )
}

export default DeleteIconBtn

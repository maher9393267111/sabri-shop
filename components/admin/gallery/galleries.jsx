import React from 'react';
import AdminLayout from '../AdminLayout';
import SubCategoryTable from './GalleryTable';

const GalleryMain = ({subcats}) => {
    return (
        <div>
            <AdminLayout>
            <SubCategoryTable subcats={subcats} />
            </AdminLayout>
        </div>
    );
}
export default GalleryMain;

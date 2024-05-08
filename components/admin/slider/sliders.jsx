import React from 'react';
import AdminLayout from '../AdminLayout';
import SubCategoryTable from './sliderTable';

const SlidersMain = ({subcats}) => {
    return (
        <div>
            <AdminLayout>
            <SubCategoryTable subcats={subcats} />
            </AdminLayout>
        </div>
    );
}
export default SlidersMain;

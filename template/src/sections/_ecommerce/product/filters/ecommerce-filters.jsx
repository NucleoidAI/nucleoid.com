import PropTypes from 'prop-types';
import { useState, useCallback } from 'react';

import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';

import { useBoolean } from 'src/hooks/use-boolean';
import { useResponsive } from 'src/hooks/use-responsive';

import Iconify from 'src/components/iconify';

import FilterTag from './filter-tag';
import FilterBrand from './filter-brand';
import FilterPrice from './filter-price';
import FilterStock from './filter-stock';
import FilterRating from './filter-rating';
import FilterCategory from './filter-category';
import FilterShipping from './filter-shipping';

// ----------------------------------------------------------------------

const BRAND_OPTIONS = ['Apple', 'Samsung', 'Xiaomi', 'Honor'];

const CATEGORY_OPTIONS = [
  'Apple iPhone',
  'Samsung Galaxy',
  'Nike Air Max',
  'Adidas Ultraboost',
  'Sony PlayStation',
];

const SHIPPING_OPTIONS = ['Fast', 'Saving', 'Free'];

const TAG_OPTIONS = ['Books and Media', 'Pet', 'Electronics', 'Food', 'Automotive and Industrial'];

// ----------------------------------------------------------------------

const defaultValues = {
  filterBrand: [BRAND_OPTIONS[1]],
  filterCategories: '',
  filterRating: null,
  filterStock: false,
  filterShipping: [],
  filterTag: [],
  filterPrice: {
    start: 0,
    end: 0,
  },
};

export default function EcommerceFilters({ open, onClose }) {
  const mdUp = useResponsive('up', 'md');

  const [filters, setFilters] = useState(defaultValues);

  const getSelected = (selectedItems, item) =>
    selectedItems.includes(item)
      ? selectedItems.filter((value) => value !== item)
      : [...selectedItems, item];

  const handleChangeCategories = useCallback(
    (name) => {
      setFilters({
        ...filters,
        filterCategories: name,
      });
    },
    [filters]
  );

  const handleChangeBrand = useCallback(
    (name) => {
      setFilters({
        ...filters,
        filterBrand: getSelected(filters.filterBrand, name),
      });
    },
    [filters]
  );

  const handleChangeShipping = useCallback(
    (name) => {
      setFilters({
        ...filters,
        filterShipping: getSelected(filters.filterShipping, name),
      });
    },
    [filters]
  );

  const handleChangeTag = useCallback(
    (name) => {
      setFilters({
        ...filters,
        filterTag: getSelected(filters.filterTag, name),
      });
    },
    [filters]
  );

  const handleChangeRating = useCallback(
    (event) => {
      setFilters({
        ...filters,
        filterRating: event.target.value,
      });
    },
    [filters]
  );

  const handleChangeStartPrice = useCallback(
    (event) => {
      setFilters({
        ...filters,
        filterPrice: {
          ...filters.filterPrice,
          start: Number(event.target.value),
        },
      });
    },
    [filters]
  );

  const handleChangeEndPrice = useCallback(
    (event) => {
      setFilters({
        ...filters,
        filterPrice: {
          ...filters.filterPrice,
          end: Number(event.target.value),
        },
      });
    },
    [filters]
  );

  const handleChangeStock = useCallback(
    (event) => {
      setFilters({
        ...filters,
        filterStock: event.target.checked,
      });
    },
    [filters]
  );

  const handleClearAll = useCallback(() => {
    setFilters(defaultValues);
  }, []);

  const renderContent = (
    <Stack
      spacing={3}
      alignItems="flex-start"
      sx={{
        flexShrink: 0,
        width: { xs: 1, md: 280 },
      }}
    >
      <Block title="Category">
        <FilterCategory
          filterCategories={filters.filterCategories}
          onChangeCategories={handleChangeCategories}
          options={CATEGORY_OPTIONS}
          sx={{ mt: 2 }}
        />
      </Block>

      <Block title="Brand">
        <FilterBrand
          filterBrand={filters.filterBrand}
          onChangeBrand={handleChangeBrand}
          options={BRAND_OPTIONS}
          sx={{ mt: 1 }}
        />
      </Block>

      <Block title="Price">
        <FilterPrice
          filterPrice={filters.filterPrice}
          onChangeStartPrice={handleChangeStartPrice}
          onChangeEndPrice={handleChangeEndPrice}
          sx={{ mt: 2 }}
        />
      </Block>

      <Block title="Shipping">
        <FilterShipping
          filterShipping={filters.filterShipping}
          onChangeShipping={handleChangeShipping}
          options={SHIPPING_OPTIONS}
          sx={{ mt: 1 }}
        />
      </Block>

      <Block title="Ratings">
        <FilterRating
          filterRating={filters.filterRating}
          onChangeRating={handleChangeRating}
          sx={{ mt: 2 }}
        />
      </Block>

      <FilterStock filterStock={filters.filterStock} onChangeStock={handleChangeStock} />

      <Block title="Tags">
        <FilterTag
          filterTag={filters.filterTag}
          onChangeTag={handleChangeTag}
          options={TAG_OPTIONS}
          sx={{ mt: 2 }}
        />
      </Block>

      <Button
        fullWidth
        color="inherit"
        size="large"
        variant="contained"
        startIcon={<Iconify icon="carbon:trash-can" />}
        onClick={handleClearAll}
      >
        Clear All
      </Button>
    </Stack>
  );

  return (
    <>
      {mdUp ? (
        renderContent
      ) : (
        <Drawer
          anchor="right"
          open={open}
          onClose={onClose}
          PaperProps={{
            sx: {
              pt: 3,
              px: 3,
              width: 280,
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </>
  );
}

EcommerceFilters.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool,
};

// ----------------------------------------------------------------------

function Block({ title, children, ...other }) {
  const contentOpen = useBoolean(true);

  return (
    <Stack alignItems="flex-start" sx={{ width: 1 }} {...other}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        onClick={contentOpen.onToggle}
        sx={{ width: 1, cursor: 'pointer' }}
      >
        <Typography variant="h6">{title}</Typography>

        <Iconify
          icon={contentOpen.value ? 'carbon:subtract' : 'carbon:add'}
          sx={{ color: 'text.secondary' }}
        />
      </Stack>

      <Collapse unmountOnExit in={contentOpen.value} sx={{ px: 0.5 }}>
        {children}
      </Collapse>
    </Stack>
  );
}

Block.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};

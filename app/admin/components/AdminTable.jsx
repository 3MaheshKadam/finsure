"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Edit, Trash2 } from 'lucide-react';

const AdminTable = ({ data, columns, onEdit, onDelete, isLoading }) => {
  // Debug data prop
  console.log('AdminTable Data:', data);

  // Format nested data for display
  const formatCellData = (value) => {
    if (Array.isArray(value)) {
      return `${value.length} item${value.length !== 1 ? 's' : ''}`;
    } else if (typeof value === 'object' && value !== null) {
      const str = JSON.stringify(value, null, 2);
      return str.length > 30 ? str.substring(0, 30) + '...' : str;
    }
    return value ? String(value).length > 30 ? value.substring(0, 30) + '...' : value : '-';
  };

  // Skeleton Loader
  const SkeletonLoader = () => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gradient-to-r from-blue-50 to-indigo-50">
            {columns.map((col) => (
              <th key={col.key} className="p-3 text-left text-xs font-semibold text-gray-800 w-1/4">
                <motion.div
                  className="h-4 bg-gray-200 rounded w-20"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </th>
            ))}
            <th className="p-3 text-right text-xs font-semibold text-gray-800 w-1/4">
              <motion.div
                className="h-4 bg-gray-200 rounded w-16 ml-auto"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {Array(5).fill().map((_, idx) => (
            <tr key={idx} className="border-t border-gray-100">
              {columns.map((col, colIdx) => (
                <td key={colIdx} className="p-3">
                  <motion.div
                    className="h-4 bg-gray-200 rounded w-3/4"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </td>
              ))}
              <td className="p-3 text-right">
                <motion.div
                  className="h-4 bg-gray-200 rounded w-20 ml-auto"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (isLoading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-x-auto max-w-full">
      <table className="w-full table-fixed">
        <thead>
          <tr className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            {columns.map((col) => (
              <th key={col.key} className="p-3 text-left text-xs font-semibold w-1/4">
                {col.label}
              </th>
            ))}
            <th className="p-3 text-right text-xs font-semibold w-1/4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.length > 0 ? (
            data.map((item, index) => (
              <motion.tr
                key={item.id || index}
                className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className="p-3 text-sm text-gray-600 truncate"
                    title={String(item[col.key] || '')}
                  >
                    {formatCellData(item[col.key])}
                  </td>
                ))}
                <td className="p-3 text-right flex justify-end space-x-2">
                  <motion.button
                    onClick={() => {
                      console.log('Edit Clicked:', item); // Debug edit action
                      onEdit(item);
                    }}
                    className="text-blue-600 hover:text-blue-800"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Edit className="h-4 w-4" />
                  </motion.button>
                  <motion.button
                    onClick={() => {
                      console.log('Delete Clicked:', item.id); // Debug delete action
                      onDelete(item.id);
                    }}
                    className="text-red-600 hover:text-red-800"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Trash2 className="h-4 w-4" />
                  </motion.button>
                </td>
              </motion.tr>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length + 1} className="p-3 text-center text-gray-500 text-sm">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
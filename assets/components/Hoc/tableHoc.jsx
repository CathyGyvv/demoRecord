import React, { Component } from 'react';
import { Form, Input, message } from 'antd';

const TableHoc = (SubComponent) => {
  const pageSizeOptions = ['10', '30', '50', '100'];

  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        key: 1,
        page: 1,
        pageSize: Number.parseInt(pageSizeOptions[0], 10),
        total: 0,
        dataSource: [],
        rowSelectedId: ''
      };
      this.api = {};
      this.formRef = null;
    }

    componentDidMount() {
      this.handleSearch();
      window.addEventListener('resize', this.resize, false);
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
    }

    init = (api) => {
      this.api = api;
    };

    setFormRef = (formRef) => {
      this.formRef = formRef;
    };

    resize = () => {
      this.setState({
        key: Math.random()
      });
    };

    // 选中行
    setRowSelectedId = (id) => {
      this.setState({ rowSelectedId: id });
    };

    getRowClassName = (id) => (id === this.state.rowSelectedId ? 'row-selected' : '');

    // 切换页码/切换每页展示条数
    pageRowsChange = (page, pageSize) => {
      this.setState({ page, pageSize }, () => {
        this.handleSearch();
      });
    };

    //del删除，update更新，add增加, search查询
    handleSearch = (status) => {
      const page = this.getPage(status);
      const params = { page, rows: this.state.pageSize };

      if (this.formRef && this.formRef.current) {
        const values = this.formRef.current.getFieldsValue();
        for (let k in values) {
          if (values[k]) {
            params[k] = values[k].trim();
          }
        }
      }

      this.api.list(params).then((res) => {
        const { data } = res.data;
        if (data) {
          const { total, rows } = data;
          this.setState({ total, page, dataSource: rows });
        }
      });
    };

    getPage = (status) => {
      let { page } = this.state;
      const { pageSize, total } = this.state;
      if (status) {
        if (status === 'del') {
          if (total + pageSize - 1 === page * pageSize) {
            page -= 1;
          }
        } else if (status !== 'update') {
          page = 1;
        }
      }
      return page;
    };

    // 删除
    handleDelete = (params) => {
      this.api.delete(params).then((res) => {
        if (res.data.data !== 0) {
          message.success('删除成功');
          this.handleSearch('del');
        } else {
          message.error('删除失败');
        }
      });
    };

    getFields = (searchFields) => {
      const children = searchFields.map(({ name, title }) => (
        <Form.Item key={name} name={name}>
          <Input placeholder={title} />
        </Form.Item>
      ));
      return children;
    };

    render() {
      const props = {
        ...this.props,
        init: this.init,
        setFormRef: this.setFormRef,
        handleSearch: this.handleSearch,
        handleDelete: this.handleDelete,
        setRowSelectedId: this.setRowSelectedId,
        getRowClassName: this.getRowClassName,
        getFields: this.getFields,
        pageRowsChange: this.pageRowsChange,

        tableInfo: {
          page: this.state.page,
          pageSize: this.state.pageSize,
          pageSizeOptions,
          total: this.state.total,
          dataSource: this.state.dataSource
        }
      };

      return <SubComponent {...props} />;
    }
  };
};

export default TableHoc;

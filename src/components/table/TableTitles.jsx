import React from 'react'

const TableTitles = ({partners}) => {
  return (
    <div className="table__titles">
              <div className="table__title table__titleNum">№ чека</div>
              <div className="table__title">итого</div>
              <div className="table__title">кто платил</div>
              <div className="table__title">
                траты <br />
                {partners.partner1}
              </div>
              <div className="table__title">
                траты <br />
                {partners.partner2}
              </div>
              <div className="table__title">другое</div>
              <div className="table__title">
                долг <br />
                {partners.partner1}
              </div>
              <div className="table__title">
                долг <br />
                {partners.partner2}
              </div>
            </div>
  )
}

export default TableTitles

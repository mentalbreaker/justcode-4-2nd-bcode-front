import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AiTwotoneStar, AiOutlineEdit } from 'react-icons/ai';
import { DetailContext, ReviewContext, UserContext } from '../Context';
import Line from '../components/Filters/Line';
import ReviewModal from '../components/Modals/ReviewModal';
import SignInPlzModal from '../components/Modals/SignInPlzModal';
import Byfilter from './Filters/ByFilter';

const Wrapper = styled.div`
  border-top: 1px solid black;
  margin: 100px 40px;
  width: 1200px;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 820px) {
    width: 90%;
  }
  @media (max-width: 375px) {
    margin: 100px 0 0 0;
  }
  .reviewBox {
    color: #ee2c7a;
    font-size: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 40px 0;
    border-bottom: 1px solid #ee2c7a;

    .writeReview {
      font-size: 50px;
      margin-left: 50px;
    }
  }
`;

const Rate = styled.div`
  font-size: 30px;
  padding: 100px 0;
  border-bottom: 1px solid silver;

  span {
    padding-right: 30px;
  }
`;

const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #e8e1e1;
  font-size: 25px;
  padding: 30px 0;

  button {
    font-size: 20px;
    border: none;
    background-color: inherit;
    margin-right: 10px;
  }
  span {
    margin-left: 20px;
    padding-right: 20px;
    @media (max-width: 375px) {
      width: 50px;
    }
  }
`;

function Reviews() {
  const { itemRate, item, reivewObj } = useContext(DetailContext);
  const { userId } = useContext(UserContext);
  const [filter, setFilter] = useState(<Byfilter />);
  const [reviewModalOpen, setReviewModalOpen] = useState(false);
  const [signInPlzModalOpen, setSignInPlzModalOpen] = useState(false);
  const [formMethod, setFormMethod] = useState({
    method: 'POST',
    review_id: 0,
  });

  const confirmLoggedIn = () => {
    if (userId) {
      setReviewModalOpen(true);
    } else {
      setSignInPlzModalOpen(true);
    }
  };

  const reviewCount = reivewObj._count.content;

  return (
    <Wrapper className="reviews">
      <div className="reviewBox">
        상품 리뷰(
        {reviewCount})
        <AiOutlineEdit
          className="writeReview"
          onClick={() => {
            confirmLoggedIn(true);
            setFormMethod({ method: 'POST' });
            window.scrollTo(0, 300);
          }}
        />
        <ReviewModal
          reviewModalOpen={reviewModalOpen}
          setReviewModalOpen={setReviewModalOpen}
          formMethod={formMethod}
        />
        <SignInPlzModal
          signInPlzModalOpen={signInPlzModalOpen}
          setSignInPlzModalOpen={setSignInPlzModalOpen}
        />
      </div>

      <Rate>
        <span>고객 평점</span>
        {itemRate(Math.ceil(reivewObj._avg.rating)).map((i, index) =>
          i !== 0 ? (
            <AiTwotoneStar key={index} style={{ color: '#ffb23a' }} />
          ) : (
            <AiTwotoneStar key={index} style={{ color: 'silver' }} />
          )
        )}
        &nbsp;
        {Number(item.rate).toFixed(1)}
      </Rate>
      <ReviewContext.Provider
        value={{ setFilter, setReviewModalOpen, setFormMethod }}
      >
        <Filter>
          <span>총 {reviewCount}</span>
          <Line />
        </Filter>
        {filter}
      </ReviewContext.Provider>
    </Wrapper>
  );
}

export default Reviews;

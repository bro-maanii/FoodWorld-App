# main.py
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from sqlalchemy import TIMESTAMP, Date, Time, create_engine, Column, Integer, String, func
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from fastapi.middleware.cors import CORSMiddleware


DATABASE_URL = "postgresql://alie15425:WgFoO1ylnI7d@ep-noisy-bread-a15xrk5r.ap-southeast-1.aws.neon.tech/resturant-seats?sslmode=require"

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker( bind=engine)
Base = declarative_base()

class Reservation(Base):
    __tablename__ = 'reservations'

    id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    phone_number = Column(String(20), nullable=False)
    reservation_date = Column(Date, nullable=False)
    reservation_time = Column(Time, nullable=False)
    number_of_people = Column(Integer, nullable=False)
    created_at = Column(TIMESTAMP, server_default=func.current_timestamp())

Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins, change as needed for production
    allow_credentials=True,
    allow_methods=["*"],  # Allow all methods, including OPTIONS
    allow_headers=["*"],  # Allow all headers
)

class ResponseDataRequest(BaseModel):
    name: str
    email: str
    phone_number: str
    reservation_date: str
    reservation_time: str
    number_of_people: int | str

# add reservation
@app.post("/api/add_reservation")
async def add_reservation(form_data: ResponseDataRequest):
    db = SessionLocal()
    db_form_data = Reservation(
        name=form_data.name,
        email=form_data.email,
        phone_number=form_data.phone_number,
        reservation_date=form_data.reservation_date,
        reservation_time=form_data.reservation_time,
        number_of_people=form_data.number_of_people
    )
    db.add(db_form_data)
    try:
        db.commit()
        return {"message": "Form data saved successfully", "data": db_form_data}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail="Internal server error")
    finally:
        db.close()
        
# get reservations
@app.get("/api/get_reservations")
async def get_reservations():
    db = SessionLocal()
    reservations = db.query(Reservation).all()
    db.close()
    return {"message": "Reservations retrieved successfully", "data": reservations}

# delete reservation
@app.delete("/api/delete_reservation/{reservation_id}")
async def delete_reservation(reservation_id: int):
    db = SessionLocal()
    reservation = db.query(Reservation).filter(Reservation.id == reservation_id).first()
    if not reservation:
        raise HTTPException(status_code=404, detail="Reservation not found")
    db.delete(reservation)
    db.commit()
    db.close()
    return {"message": "Reservation deleted successfully"}